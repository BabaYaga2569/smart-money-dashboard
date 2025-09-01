const plaid = require('plaid');
exports.handler = async () => {
  const client = new plaid.PlaidApi(new plaid.Configuration({
    basePath: plaid.PlaidEnvironments[process.env.PLAID_ENV],
    baseOptions: { headers: { 'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID, 'PLAID-SECRET': process.env.PLAID_SECRET } }
  }));
  const response = await client.linkTokenCreate({
    user: { client_user_id: 'user-id' },
    client_name: 'Smart Money App$',
    products: ['transactions'],
    language: 'en',
    country_codes: ['US'],
  });
  return { statusCode: 200, body: JSON.stringify(response.data) };
};
