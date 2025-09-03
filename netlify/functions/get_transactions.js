const plaid = require('plaid');

exports.handler = async function(event, context) {
  try {
    const client = new plaid.PlaidApi(new plaid.Configuration({
      basePath: plaid.PlaidEnvironments[process.env.PLAID_ENV],
      baseOptions: {
        headers: {
          'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
          'PLAID-SECRET': process.env.PLAID_SECRET,
        },
      },
    }));

    const accessToken = process.env.PLAID_ACCESS_TOKEN;
    const now = new Date();
    const startDate = new Date(now);
    startDate.setMonth(startDate.getMonth() - 2);

    const page = parseInt((event.queryStringParameters && event.queryStringParameters.page) || "1");
    const limit = parseInt((event.queryStringParameters && event.queryStringParameters.limit) || "50");
    const offset = (page - 1) * limit;

    const response = await client.transactionsGet({
      access_token: accessToken,
      start_date: startDate.toISOString().split('T')[0],
      end_date: now.toISOString().split('T')[0],
      options: { count: limit, offset: offset },
    });

    const transactions = response.data.transactions.map(txn => ({
      date: txn.date,
      name: txn.name,
      amount: txn.amount
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ transactions }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};