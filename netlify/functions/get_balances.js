const plaid = require('plaid');
exports.handler = async () => {
  const client = new plaid.PlaidApi(new plaid.Configuration({
    basePath: plaid.PlaidEnvironments[process.env.PLAID_ENV],
    baseOptions: { headers: { 'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID, 'PLAID-SECRET': process.env.PLAID_SECRET }}
  }));
  // NOTE: In real flow you store access_token in DB. Here just assume one token in env for demo.
  const response = await client.accountsBalanceGet({ access_token: process.env.PLAID_ACCESS_TOKEN });
  return { statusCode: 200, body: JSON.stringify({ accounts: response.data.accounts }) };
};
