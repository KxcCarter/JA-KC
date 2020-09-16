const AWS = require('aws-sdk');
const uuid = require('node-uuid');

// Create an S3 client
const s3 = new AWS.S3();

// Note:
// currently this file will not work on anyone's computer except for Kenny's

AWS.config.getCredentials(function (err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log('Access key:', AWS.config.credentials.accessKeyId);
  }
});

console.log('Region: ', AWS.config.region);

const deleteAFile = async () => {
  const result = await s3
    .deleteObject({
      Bucket: 'node-sdk-sample-c0b39098-ff55-4a1f-8748-8387ffe5168e',
      Key: keyName,
    })
    .promise(() => {
      console.log('hey whats up?');
    });
};

// deleteAFile();

s3.upload;

// s3.createBucket({ Bucket: bucketName }, function () {
//   var params = { Bucket: bucketName, Key: keyName, Body: 'Hello World!' };
//   s3.putObject(params, function (err, data) {
//     if (err) console.log(err);
//     else
//       console.log(
//         'Successfully uploaded data to ' + bucketName + '/' + keyName
//       );
//   });
// });
