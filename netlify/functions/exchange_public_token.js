const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');

exports.handler = async (event, context) => {
  const config = new Configuration({
    basePath: PlaidEnvironments[process.env.PLAID_ENV],
    baseOptions: {
      headers: {
        'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
        'PLAID-SECRET': process.env.PLAID_SECRET,
      },
    },
  });

  const client = new PlaidApi(config);

  try {
    const body = JSON.parse(event.body);
    const publicToken = body.public_token;

    const response = await client.itemPublicTokenExchange({
      public_token: publicToken,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        access_token: response.data.access_token,
        item_id: response.data.item_id,
      }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
