const plaid = require('plaid');
exports.handler = async function(event, context) {
  const client = new plaid.PlaidApi(new plaid.Configuration({
    basePath: plaid.PlaidEnvironments[process.env.PLAID_ENV],
    baseOptions: { headers: { 'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID, 'PLAID-SECRET': process.env.PLAID_SECRET } }
  }));
  try {
    const response = await client.linkTokenCreate({
      user: { client_user_id: 'user-id' },
      client_name: 'Smart Money',
      products: ['transactions'],
      country_codes: ['US'],
      language: 'en'
    });
    return { statusCode: 200, body: JSON.stringify(response.data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
