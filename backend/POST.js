// POST REQUEST TO ADD TRAP
let AWS = require('aws-sdk');
let dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = (event, context, callback) => {
    let status;     // returned later to tell client if their request workeds
    let tableName = "ChessBrainTraps";   
    // all just test info for now
    let item = {
        "board": 
            {S: event.body.board}, //DDB needs data types for some reason, for more info, check out https://stackoverflow.com/questions/33942945/error-invalidparametertype-expected-params-itempid-to-be-a-structure-in-dyn
        "trap": 
            {S: event.body.name},
        "risk": 
            {S: event.body.risk},
        "reward": 
            {S: event.body.reward},
        "colorToPlay": 
            {S: event.body.color},
        "desc": 
            {S: event.body.desc},
        "initialPosition": 
            {S: event.body.pos1},
        "finalPosition": 
            {S: event.body.pos2},
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