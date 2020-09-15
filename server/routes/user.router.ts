import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';
import userStrategy from '../strategies/user.strategy';
import { encryptPassword } from '../modules/encryption';
import hexGen from '../modules/hex';

const router: express.Router = express.Router();
router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  res.send(req.user);
});

router.post(
  '/',
  async (req: Request, res: Response): Promise<void> =>{
    try{
      const newHex: string = hexGen(8);
      const email: string = req.body.email;

      const queryString = `INSERT INTO "invites" ("email", "hex") VALUES ($1, $2);`; 402d to replace invites with proper table name

      await pool.query(queryString, [email, newHex]);
      res.sendStatus(201);
    } catch(err){
      console.warn(err);
      res.sendStatus(500);
    }
  }
  );

router.post(
  '/register',
  async (req: Request, res: Response, next: express.NextFunction): Promise<void> => {
    try{
      const userQueryText = `SELECT * FROM "invites" WHERE "email"=$1 AND "hex"=$2;`; //will need to replace invites with proper table name
      const response = await pool.query(userQueryText, [
        req.body.email.toLowerCase(),
        req.body.hex
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
      ])
    } catch(err) {
        console.log(`Error saving user to database: ${err}`);
        res.sendStatus(500);
      };
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
export default router;
