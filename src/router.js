import expressjwt from 'express-jwt';
import { signin, fetchMtnses } from './authController';
import { asset, assetSecret } from './assetController';

const jwtCheck = expressjwt({ secret: process.env.TOKEN_SECRET });

const router = (app) => {
  app.get('/mtnses', fetchMtnses);
  app.post('/signin', signin);
  app.get('/asset', asset);
  app.get('/asset/secret', jwtCheck, assetSecret);

  app.get('*', (req, res) => res.sendStatus(404));
};

export default router;
