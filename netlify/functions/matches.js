
exports.handler = async function() {

  const API_KEY = "ضع_مفتاح_API_هنا";

  const today = new Date().toISOString().split("T")[0];

  try {

    const response = await fetch(
      `https://v3.football.api-sports.io/fixtures?date=${today}`,
      {
        headers: {
          "x-apisports-key": API_KEY
        }
      }
    );

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    };

  } catch (error) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message
      })
    };

  }

};
