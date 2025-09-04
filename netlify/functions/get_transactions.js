const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');

const config = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV || 'sandbox'],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

const client = new PlaidApi(config);

exports.handler = async () => {
  try {
    const now = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);
    const response = await client.transactionsGet({
      access_token: process.env.PLAID_ACCESS_TOKEN,
      start_date: startDate.toISOString().split('T')[0],
      end_date: now.toISOString().split('T')[0],
    });
    return { statusCode: 200, body: JSON.stringify(response.data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};