exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      dailyBudget: 120,
      categories: {
        "Food & Drink": "#39ff14",
        "Rent": "#9d00ff",
        "Shopping": "#ffcc00",
        "Transport": "#00ffff",
        "Other": "#ff4d4d"
      }
    })
  };
};