exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      transactions: [
        { name: "Starbucks", amount: "-6.50" },
        { name: "Netflix", amount: "-15.99" },
        { name: "Rent", amount: "-1200.00" },
        { name: "Amazon", amount: "-45.00" },
        { name: "Paycheck", amount: "+2500.00" }
      ]
    })
  };
};
