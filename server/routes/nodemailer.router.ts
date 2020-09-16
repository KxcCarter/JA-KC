import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import * as nodemailer from 'nodemailer';

const router: express.Router = express.Router();

require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'juniorachievement.kc@gmail.com',
    pass: 'i?q6$83heBMQ9%rKPoM$',
  },
});

router.post(
  '/inviteAdmin',
  (req: Request, res: Response, next: express.NextFunction): void => {
    // POST route code here
    console.log(`We're in. testing /1 route.`);
    const mailer = req.body;
    const mailOptions = {
      from: `"Junior Achievement Admin" juniorachievement.kc@gmail.com`,
      to: mailer.toEmail,
      subject: mailer.subject,
      text: mailer.message,
      html: '<b>' + mailer.message + '</b>',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(`error: ${error}`);
        // res.sendStatus(500);
      }
      console.log(`Message Sent ${info.response}`);
      res.sendStatus(200);
    });
  }
);

export default router;
