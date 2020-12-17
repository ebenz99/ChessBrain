let AWS = require('aws-sdk');
let dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = async (event) => {
    let tableName = "ChessBrainTraps";  
    let params = {
        KeyConditionExpression: 'board = :board',
        ExpressionAttributeValues: {
            ":board": {"S": event.queryStringParameters.board},
        },
        TableName: tableName,
      };


    let resp = await dynamodb.query(params).promise()
    let traps = resp.Items;

    const response = {
        statusCode: 200,
        // just signals to client this is secure
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,GET"
        },
        // at this point just returns the board state from the request to the user
        body: JSON.stringify(traps),
    };
    return response;
};