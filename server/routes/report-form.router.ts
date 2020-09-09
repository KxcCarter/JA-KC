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
    const queryText = `SELECT * FROM "scheduled_classes";`;
    pool
      .query(queryText)
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
    const class_id: string = req.body.class_id;
    const school_name: string = req.body.school_name;
    const volunteer_name: string = req.body.volunteer_name;
    const size: string = req.body.size;
    const completion_date: string = req.body.completion_date;

    const queryText = `INSERT INTO "scheduled_classes" VALUES ($1, $2, $3, $4, $5);`;
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
