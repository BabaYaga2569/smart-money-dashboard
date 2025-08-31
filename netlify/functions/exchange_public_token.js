const plaid = require('plaid');
exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const client = new plaid.PlaidApi(new plaid.Configuration({
    basePath: plaid.PlaidEnvironments[process.env.PLAID_ENV],
    baseOptions: { headers: { 'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID, 'PLAID-SECRET': process.env.PLAID_SECRET }}
  }));
  const response = await client.itemPublicTokenExchange({ public_token: body.public_token });
  return { statusCode: 200, body: JSON.stringify({ access_token: response.data.access_token }) };
};
