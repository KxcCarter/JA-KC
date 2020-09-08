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
    const queryText = `SELECT`;
    pool
      .query(queryText, [req.body])
      .then((response) => res.send(response.rows))
      .catch((error) => console.log('Error in report-form GET:', error));
  }
);

/**
 * POST route template
 */
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const class_id = req.body;
    const school_name = req.body;
    const volunteer_name = req.body;
    const size = req.body;
    const completion_date = req.body;

    const queryText = `INSERT INTO`;
    pool
      .query(queryText, [
        class_id,
        school_name,
        volunteer_name,
        size,
        completion_date,
      ])
      .then(() => res.sendStatus(201))
      .catch(() => res.sendStatus(500));
  }
);

export default router;
