const plaid = require('plaid');
exports.handler = async () => {
  const client = new plaid.PlaidApi(new plaid.Configuration({
    basePath: plaid.PlaidEnvironments[process.env.PLAID_ENV],
    baseOptions: { headers: { 'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID, 'PLAID-SECRET': process.env.PLAID_SECRET }}
  }));
  const startDate = new Date(); startDate.setMonth(startDate.getMonth()-1);
  const response = await client.transactionsGet({
    access_token: process.env.PLAID_ACCESS_TOKEN,
    start_date: startDate.toISOString().split('T')[0],
    end_date: new Date().toISOString().split('T')[0]
  });
  return { statusCode: 200, body: JSON.stringify({ transactions: response.data.transactions }) };
};
