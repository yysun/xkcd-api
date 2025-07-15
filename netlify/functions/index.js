exports.handler = async function (event, context) {
  
  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET"
  };

  // 1. Handle the preflight (OPTIONS) request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204, // No Content
      headers: corsHeaders,
      body: ''
    };
  }

  let response = await fetch('https://xkcd.com/info.0.json');
  const current = await response.json();
  const num = Math.floor(Math.random() * current.num) + 1;
  response = await fetch(`https://xkcd.com/${num}/info.0.json`);
  const comic = await response.json();
  return {
    statusCode: 200,
    headers: corsHeaders,
    body: JSON.stringify(comic),
  };
};