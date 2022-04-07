var AWS = require("aws-sdk");
var documentClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
  endpoint: "http://docker.for.mac.localhost:8000",
});
const tableName = "Cards";

exports.handler = async (event) => {
  console.log("Received: " + JSON.stringify(event, null, 2)); // 이벤트는 json타입
  let response = "";
  try {
    //const id = event.requestContext.requestId;
    const body = JSON.parse(event.body);
    var params = {
      TableName: tableName,
      Item: {
        id: body.id,
        title: body.title,
        category: body.category,
      },
    };
    await documentClient.put(params).promise();

    response = {
      statusCode: 200,
      body: JSON.stringify({ id: id }),
    };
  } catch (exception) {
    console.error(exception);

    response = {
      statusCode: 500,
      body: JSON.stringify({ "Message: ": exception }),
    };
  }

  return response;
};
