import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';
import * as nodemailer from 'nodemailer';

const router: express.Router = express.Router();

require('dotenv').config();

// const transporter = nodemailer.createTransport(
//   `smtps://juniorachievement.kc@gmail.com:i?q6$83heBMQ9%rKPoM$@smtp.gmail.com`
// );

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'juniorachievement.kc@gmail.com',
    pass: 'i?q6$83heBMQ9%rKPoM$',
  },
  //   auth: {
  //     user: process.env.NODEMAILER_USER,
  //     pass: process.env.NODEMAILER_PASSWORD,
  //   },
});

export class GMailService {
  private _transporter: nodemailer.Transporter;
  constructor() {
    this._transporter = nodemailer.createTransport(
      `smtps://<juniorachievement.kc>%40gmail.com:<i?q6$83heBMQ9%rKPoM$>@smtp.gmail.com`
    );
  }
  sendMail(to: string, subject: string, content: string) {
    let options = {
      from: process.env.NODEMAILER_USER,
      to: to,
      subject: subject,
      text: content,
    };

    this._transporter.sendMail(options, (error, info) => {
      if (error) {
        return console.log(`error: ${error}`);
      }
      console.log(`Message Sent ${info.response}`);
    });
  }
}

router.post(
  '/1',
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

router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    // POST route code here
    console.log(`We're in. Testing / route.`);

    var mailOptions = {
      from: process.env.NODEMAILER_USER,
      to: '6thbowlofwrath@gmail.com',
      subject: 'Hello',
      text: 'Hello from node.js you dirty dog.',
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(`error: ${error}`);
      }
      console.log(`Message Sent ${info.response}`);
    });
  }
);

export default router;
