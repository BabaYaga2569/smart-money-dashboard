const plaid = require('plaid');
exports.handler = async function(event, context) {
  const client = new plaid.PlaidApi(new plaid.Configuration({
    basePath: plaid.PlaidEnvironments[process.env.PLAID_ENV], // ✅ Fixed typo here
    baseOptions: {
      headers: {
        'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
        'PLAID-SECRET': process.env.PLAID_SECRET,
      },
    },
  }));

  try {
    const { access_token } = JSON.parse(event.body);
    const start_date = new Date();
    start_date.setMonth(start_date.getMonth() - 1); // last 30 days
    const end_date = new Date();

    const response = await client.transactionsGet({
      access_token,
      start_date: start_date.toISOString().split('T')[0],
      end_date: end_date.toISOString().split('T')[0],
      options: { count: 10, offset: 0 },
    });
    return { statusCode: 200, body: JSON.stringify(response.data) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};