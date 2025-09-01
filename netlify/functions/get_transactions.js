const plaid = require('plaid');

exports.handler = async (event) => {
  try {
    console.log("Incoming event.body (transactions):", event.body);   // Debug log
    const body = event.body ? JSON.parse(event.body) : {};
    const access_token = body.access_token;

    if (!access_token) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "No access_token received" }),
      };
    }

    const client = new plaid.PlaidApi(new plaid.Configuration({
      basePath: plaid.PlaidEnvironments[process.env.PLAID_ENV],
      baseOptions: {
        headers: {
          'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
          'PLAID-SECRET': process.env.PLAID_SECRET,
        },
      },
    }));

    const startDate = new Date();
    startDate.setMonth(startDate.getMonth() - 1);

    const response = await client.transactionsGet({
      access_token,
      start_date: startDate.toISOString().split('T')[0],
      end_date: new Date().toISOString().split('T')[0],
      options: { count: 50 },   // Limit for demo
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };

  } catch (err) {
    console.error("Plaid error in get_transactions:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || "Unknown error in get_transactions" }),
    };
  }
};
