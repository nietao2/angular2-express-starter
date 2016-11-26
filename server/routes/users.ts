import * as express from 'express';
export let router = express.Router();


/* GET users listing. */
router.get('/', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  res.json('respond with a resource');
});
