import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';
import userStrategy from '../strategies/user.strategy';
import { encryptPassword } from '../modules/encryption';
import hexGen from '../modules/hex';
import * as nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'juniorachievement.kc@gmail.com', // these should be replaced with .env variables
    pass: 'i?q6$83heBMQ9%rKPoM$', // replace with .env variable
  },
});

const router: express.Router = express.Router();
router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  res.send(req.user);
});

router.post(
  '/',
  async (req: Request, res: Response): Promise<void> => {
    try {
      const newHex: string = hexGen(8);
      const email: string = req.body.email;

      const queryString = `INSERT INTO "invites" ("email", "hex") VALUES ($1, $2);`;

      await pool.query(queryString, [email, newHex]);

      const message: string = `Hey we are sending you a link that has a hex code in it lol cool right? ${newHex}`;
      const subject: string = `Grreeeetings from the intertubes`;

      const mailOptions = {
        from: `"Junior Achievement Admin" juniorachievement.kc@gmail.com`,
        to: email,
        subject: subject,
        text: message,
        html: '<b>' + message + '</b>',
      };

      await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(`error: ${error}`);
        }
        console.log(`Message Sent ${info.response}`);
        res.sendStatus(200);
      });

      res.sendStatus(201);
    } catch (err) {
      console.warn(err);
      res.sendStatus(500);
    }
  }
);

router.post(
  '/register/:hex',
  async (
    req: Request,
    res: Response,
    next: express.NextFunction
  ): Promise<void> => {
    try {
      const userQueryText = `SELECT * FROM "invites" WHERE "email"=$1 AND "hex"=$2;`; //will need to replace invites with proper table name
      const response: any = await pool.query(userQueryText, [
        req.body.email.toLowerCase(),
        req.params.hex,
      ]);
      if (response.rows == 0) res.send(401);

      const username: string = <string>req.body.username;
      const password: string = encryptPassword(req.body.password);
      const first_name: string = <string>req.body.first_name;
      const last_name: string = <string>req.body.last_name;
      const email: string = <string>req.body.email;
      const telephone: string = <string>req.body.telephone;
      const account_type_id: number = <number>req.body.account_type_id;
      const queryText: string = `INSERT INTO "users" (username, password, first_name, last_name, email, telephone, account_type_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
      await pool.query(queryText, [
        username,
        password,
        first_name,
        last_name,
        email,
        telephone,
        account_type_id,
      ]);
      res.sendStatus(201);
    } catch (err) {
      console.log(`Error saving user to database: ${err}`);
      res.sendStatus(500);
    }
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
