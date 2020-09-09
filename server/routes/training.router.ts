import { Request, Response } from 'express';
import express from 'express';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route training
 */
router.get(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const queryText = `SELECT`;
    pool
      .query(queryText, [req.body])
      .then((response) => res.send(response.rows))
      .catch((error) => console.log('Error in training GET:', error));
  }
);

/**
 * POST route training
 */
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const title = req.body;
    const content = req.body;

    const queryText = `INSERT INTO`;
    pool
      .query(queryText, [title, content])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  }
);

export default router;
