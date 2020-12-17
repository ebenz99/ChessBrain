// // GET REQUEST TO GET MOVE BACK
// exports.handler = async (event) => {
//     const response = {
//         statusCode: 200,
//         // just signals to client this is secure
//         headers: {
//             "Access-Control-Allow-Headers" : "Content-Type",
//             "Access-Control-Allow-Origin": "*",
//             "Access-Control-Allow-Methods": "OPTIONS,GET"
//         },
//         // at this point just returns the board state from the request to the user
//         body: JSON.stringify({data: JSON.stringify(event.queryStringParameters.board)}),
//     };
//     return response;
// };

let AWS = require('aws-sdk');
let dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

exports.handler = async (event) => {
    let params = {
        ExpressionAttributeValues: {
          'board': {S: event.queryStringParameters.board},
        },
      };

      let traps = [];

      dynamodb.query(params, function(err, data) {
        if (err) {
          console.log("Error", err);
        } else {
          //console.log("Success", data.Items);
          data.Items.forEach(function(element, index, array) {
            traps.push(JSON.stringify(element));
          });
        }
      });


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

  
