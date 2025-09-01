const plaid = require('plaid');
exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  const client = new plaid.PlaidApi(new plaid.Configuration({
    basePath: plaid.PLAID_ENVIRONMENTS[process.env.PLAID_ENV],
    baseOptions: { headers: { 'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID, 'PLAID-SECRET': process.env.PLAID_SECRET } }
  }));
  const startDate = new Date(); startDate.setMonth(startDate.getMonth() - 1);
  const response = await client.transactionsGet({
    access_token: body.access_token,
    start_date: startDate.toISOString().split('T')[0],
    end_date: new Date().toISOString().split('T')[0],
    options: { count: 10 }
  });
  return { statusCode: 200, body: JSON.stringify(response.data) };
};
