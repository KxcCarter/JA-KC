import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import * as nodemailer from 'nodemailer';

const router: express.Router = express.Router();

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
      }
      console.log(`Message Sent ${info.response}`);
      res.sendStatus(200);
    });
  }
);

export default router;
