// GET REQUEST TO GET MOVE BACK
exports.handler = async (event) => {
    const response = {
        statusCode: 200,
        // just signals to client this is secure
        headers: {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "OPTIONS,GET"
        },
        // at this point just returns the board state from the request to the user
        body: JSON.stringify({data: JSON.stringify(event.queryStringParameters.board)}),
    };
    return response;
};

// POST REQUEST TO ADD TRAP
let AWS = require('aws-sdk');
let dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
    let status;     // returned later to tell client if their request workeds
    let tableName = "ChessBrainTraps";   
    // all just test info for now
    let item = {
        "board": 
            {S: event.body.name}, //DDB needs data types for some reason, for more info, check out https://stackoverflow.com/questions/33942945/error-invalidparametertype-expected-params-itempid-to-be-a-structure-in-dyn
        "trap": 
            {S: event.body.name},
        "colorToPlay": 
            {S: event.body.color},
    }
    // Puts the item into the table and updates the status accordingly
    dynamodb.putItem({
        "TableName": tableName,
        "Item" : item
    }, (err) => { context.done(err);
    }, (success) => { status = 'good'; 
    });

    // returns a response to the API Gateway that it can understand/expect
    const response = {
        "isBase64Encoded": false,
        "statusCode": 200,
        "body": {"data":JSON.stringify(event)},
        headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Headers':'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
            'Access-Control-Allow-Credentials' : true,
            'Content-Type': 'application/json'
        },
    }
    callback(null, response);
};