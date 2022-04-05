var AWS = require("aws-sdk");
var documentClient = new AWS.DynamoDB.DocumentClient({
  apiVersion: "2012-08-10",
});
const tableName = "Cards";

exports.handler = async (event) => {
  console.log("Received: " + JSON.stringify(event, null, 2)); // 이벤트는 json타입
  let response = "";
  try {
    var params = {
      TableName: tableName,
    };
    const cards = await documentClient.scan(params).promise();

    // callback version
    // documentClient.scan(params, function (err, data) {
    //   if (err) console.log(err);
    //   else console.log(data);
    // });

    response = {
      statusCode: 200,
      body: JSON.stringify(cards),
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
