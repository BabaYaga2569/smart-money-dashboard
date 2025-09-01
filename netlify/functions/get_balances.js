const plaid = require('plaid');

exports.handler = async (event) => {
  try {
    console.log("Incoming event.body:", event.body);   // debug
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

    const response = await client.accountsBalanceGet({ access_token });
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };

  } catch (err) {
    console.error("Plaid error in get_balances:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message || "Unknown error" }),
    };
  }
};
