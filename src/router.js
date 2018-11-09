import { jwtCheck } from './token-service';
import { signin, fetchMtnses } from './auth-controller';
import { asset, assetSecret } from './asset-controller';

const router = (app) => {
  app.get('/mtnses', fetchMtnses);
  app.post('/signin', signin);
  app.get('/asset', asset);
  app.get('/asset/secret', jwtCheck, assetSecret);

  app.get('*', (req, res) => res.sendStatus(404));
};

export default router;
