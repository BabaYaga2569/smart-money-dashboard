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
    const response = await client.accountsGet({ access_token: accessToken });

    const accounts = response.data.accounts.map(acc => ({
      name: acc.name,
      current: acc.balances.current
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ accounts }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};