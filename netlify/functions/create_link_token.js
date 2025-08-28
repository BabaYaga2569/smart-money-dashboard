const { Configuration, PlaidApi, PlaidEnvironments } = require('plaid');

exports.handler = async function(event, context) {
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
    const response = await client.linkTokenCreate({
      user: { client_user_id: 'user-id-123' },
      client_name: 'Smart Family Finance',
      products: ['transactions'],
      country_codes: ['US'],
      language: 'en',
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ link_token: response.data.link_token }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};
