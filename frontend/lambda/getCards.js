exports.handler = async (event) => {
  console.log("Received: " + JSON.stringify(event, null, 2)); // 이벤트는 json타입
  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
