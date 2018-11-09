import { signin, fetchMtnses } from './auth-controller';

const router = (app) => {
  app.get('/mtnses', fetchMtnses);
  app.post('/signin', signin);
  app.get('*', (req, res) => res.sendStatus(404));
};

export default router;
