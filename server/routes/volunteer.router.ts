import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';

const router: express.Router = express.Router();

/**
 * GET route template
 */

// Get all scheduled classes
router.get(
  '/classes',
  rejectUnauthenticated,
  (req: Request, res: Response, next: express.NextFunction): void => {
    const query: string = `SELECT "scheduled_classes".*, "programs".image, "programs".sessions, "programs".title, "schools".name FROM "scheduled_classes"
    JOIN "programs" on "programs".id = "scheduled_classes".program_id
    JOIN "schools" on "schools".id = "scheduled_classes".school_id
    WHERE "scheduled_classes".user_id = $1;`;
    const user: any = req.user;

    pool
      .query(query, [user.id])
      .then((dbRes: any): void => {
        res.send(dbRes.rows);
      })
      .catch((error: string): void => {
        console.log(`Error with getting scheduled classes. ${error}`);
        res.sendStatus(500);
      });
  }
);

// Get single scheduled class
router.get(
  '/scheduled/:id',
  rejectUnauthenticated,
  (req: Request, res: Response, next: express.NextFunction): void => {
    const query: string = `SELECT "scheduled_classes".*, "programs".image, "programs".sessions, "programs".title, "schools".name FROM "scheduled_classes"
      JOIN "programs" on "programs".id = "scheduled_classes".program_id
      JOIN "schools" on "schools".id = "scheduled_classes".school_id
      WHERE "scheduled_classes".id = $1;`;
    const scheduled_class_id: any = req.params.id;

    pool
      .query(query, [scheduled_class_id])
      .then((dbRes: any): void => {
        res.send(dbRes.rows);
      })
      .catch((error: string): void => {
        console.log(`Error with getting that class. ${error}`);
        res.sendStatus(500);
      });
  }
);

router.get(
  '/resources/:id',
  rejectUnauthenticated,
  (req: Request, res: Response, next: express.NextFunction): void => {
    const query: string = `SELECT * FROM "learning_material" WHERE "learning_material".program_id = $1;`;
    const program_id: any = req.params.id;

    pool
      .query(query, [program_id])
      .then((dbRes: any): void => {
        res.send(dbRes.rows);
      })
      .catch((error: string): void => {
        console.log(`Error with getting learning material. ${error}`);
        res.sendStatus(500);
      });
  }
);

/**
 * POST route template
 */
router.post(
  '/',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const images: any = req.body.images;
    const user: any = req.user;
    const program_id: number = req.body.program_id;
    const scheduled_class_id: number = req.body.scheduled_class_id;
    const class_size: number = req.body.class_size;
    let queryStart: string = `WITH ins AS (
        INSERT INTO "images" 
            ("user_id", "program_id", "scheduled_class_id", "image_url")
        VALUES `;

    images.forEach((item: any, index: number) => {
      if (index === images.length - 1) {
        queryStart += `($1, $2, $3, '${item}'))`;
      } else {
        queryStart += `($1, $2, $3, '${item}'), `;
      }
    });

    const queryEnd: string = `UPDATE "scheduled_classes"
      SET "size" = $4, "completion_date" = CURRENT_DATE 
    WHERE "id" = $3;`;

    const fullQuery: string = queryStart + queryEnd;

    pool
      .query(fullQuery, [user.id, program_id, scheduled_class_id, class_size])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error saving completed class details to database: ${err}`);
        res.sendStatus(500);
      });
  }
);

// module.exports = router;

export default router;
