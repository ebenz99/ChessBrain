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

    let tableName = "ChessBrainTraps"; 
    // all just test info for now   
    dynamodb.putItem({
        "TableName": tableName,
        "Item" : {
            "board": 
                {S: "test"},    //DDB needs data types for some reason, for more info, check out https://stackoverflow.com/questions/33942945/error-invalidparametertype-expected-params-itempid-to-be-a-structure-in-dyn
            "trap": 
                {S: "test"},
            "colorToPlay": 
                {S: "test"},
        }
    }, function(err) {      //if there was an error, just say so for logging purposes
        if (err) {
            console.log('Error putting item into dynamodb failed: '+err);
            context.done('error');
        }
    });
};
