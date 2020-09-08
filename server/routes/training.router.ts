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
    // GET route code here
  }
);

/**
 * POST route training
 */
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    // POST route code here
  }
);

module.exports = router;
