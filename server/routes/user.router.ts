import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';
import userStrategy from '../strategies/user.strategy';
import { encryptPassword } from '../modules/encryption';

import path from 'path';
import nodemailer from 'nodemailer';
import XOAuth2 from 'nodemailer/lib/xoauth2';
// const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  // host: 'smtp.gmail.com',
  // auth: {
  //   type: 'OAuth2',
  //   user: process.env.NODEMAILER_USERNAME,
  //   clientId: process.env.OAUTH_CLIENT_ID,
  //   clientSecret: process.env.OAUTH_CLIENT_SECRET,
  //   refreshToken: 'REFRESH_TOKEN_HERE',
  // },

  service: 'gmail',
  auth: {
    // xoath2: XOAuth2.createXOAuth2Generator({})
    user: process.env.NODEMAILER_USERNAME, //YOUR GMAIL USER HERE -> EXAMPLE@gmail.com
    password: process.env.NODEMAILER_PASSWORD, //YOUR GMAIL PASSWORD, DO NOT HOST THIS INFO ON GITHUB!
  },
});

const router: express.Router = express.Router();
router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  res.send(req.user);
});
router.post(
  '/register',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const username: string = <string>req.body.username;
    const password: string = encryptPassword(req.body.password);
    const first_name: string = <string>req.body.first_name;
    const last_name: string = <string>req.body.last_name;
    const email: string = <string>req.body.email;
    const telephone: string = <string>req.body.telephone;
    const account_type_id: number = <number>req.body.account_type_id;
    const queryText: string = `INSERT INTO "users" (username, password, first_name, last_name, email, telephone, account_type_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
    pool
      .query(queryText, [
        username,
        password,
        first_name,
        last_name,
        email,
        telephone,
        account_type_id,
      ])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error saving user to database: ${err}`);
        res.sendStatus(500);
      });
  }
);
router.post(
  '/login',
  userStrategy.authenticate('local'),
  (req: Request, res: Response): void => {
    res.sendStatus(200);
  }
);
router.post('/logout', (req: Request, res: Response): void => {
  req.logout();
  res.sendStatus(200);
});

router.post(
  '/inviteAdmin',
  async (req: Request, res: Response): Promise<void> => {
    const mailer: any = req.body;

    const mailOptions = {
      //example: from: '"Scott" scott@primeacademy.io',

      from: `"Junior Achievement Admin" <juniorachievement.kc@gmail.com>`, // sender address -> //YOUR GMAIL USER HERE IN STRING + email not in string! -> EXAMPLE@gmail.com
      to: mailer.toEmail, // list of receivers
      subject: mailer.subject, // Subject line
      text: mailer.message, // plain text body
      html: '<b>' + mailer.message + '</b>', // html body
    };

    try {
      await transporter.sendMail(mailOptions, function (error: any, info: any) {
        if (error) {
          return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
      });
    } catch (err) {
      console.log('There was an error. ', err);

      res.sendStatus(500);
    }
  }
);

router.post(
  '/registerUser',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const queryString: string = `SELECT * FROM "invites" WHERE hex = $1;`;

      const hexResult: any = await pool.query(queryString, [req.body.hex]);

      if (hexResult.rows.length < 1) {
        res.sendStatus(401);
      }

      const addUserQueryString: string = `INSERT INTO "users" () VALUES ();`;
    } catch (err) {
      res.sendStatus(500);
    }
  }
);

export default router;
