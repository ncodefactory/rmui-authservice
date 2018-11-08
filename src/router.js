import passport from 'passport';
import { signin, fetchMtnses } from './authController';

// const requireJWT = passport.authenticate('jwt', { session: false });
const requireLoginAndPasswd = passport.authenticate('local', { session: false });

const router = (app) => {
  app.get('/', fetchMtnses);
  app.post('/signin', requireLoginAndPasswd, signin);
};

export default router;
