import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import AWS from 'aws-sdk';
const router: express.Router = express.Router();

const s3 = new AWS.S3();

AWS.config.update({
  // region: 'us-east-1', // Put your aws region here
  accessKeyId: process.env.AWS_Access_Key_Id,
  secretAccessKey: process.env.AWS_Secret_Key,
});

router.delete('/:key', rejectUnauthenticated, (req: any, res: any) => {
  var params = {
    Bucket: 'operisstorage',
    Key: req.params.key,
  };
  s3.deleteObject(params, function (err, data) {
    if (err)
      console.log(
        'There was an error with deleting the object. ',
        err,
        err.stack
      );
    // an error occurred
    else console.log('Object deleted. ', data); // successful response
    /*
         data = {
         }
         */
  });
});

export default router;
