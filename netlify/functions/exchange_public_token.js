const plaid = require('plaid');
exports.handler = async function(event, context) {
  const client = new plaid.PlaidApi(new plaid.Configuration({
    basePath: plaid.PlaidEnvironments[process.env.PLAID_ENV],
    baseOptions: { headers: { 'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID, 'PLAID-SECRET': process.env.PLAID_SECRET } }
  }));
  try {
    const body = JSON.parse(event.body);
    const response = await client.itemPublicTokenExchange({ public_token: body.public_token });
    return { statusCode: 200, body: JSON.stringify(response.data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
