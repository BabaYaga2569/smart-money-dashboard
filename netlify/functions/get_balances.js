exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      accounts: [
        { name: "Checking", balance: { available: 3200 } },
        { name: "Savings", balance: { available: 12000 } },
        { name: "Credit Card", balance: { available: -850 } }
      ]
    })
  };
};
