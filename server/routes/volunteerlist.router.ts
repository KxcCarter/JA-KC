import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */
router.get(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const account_type_id = 2;
    const queryText = `SELECT * FROM "users" WHERE "users".account_type_id = $1 ORDER BY "users".last_name ASC;`;
    pool
      .query(queryText, [account_type_id])
      .then((response) => res.send(response.rows))
      .catch((error) => console.log('Error in dog get route', error));
  }
);

export default router;
