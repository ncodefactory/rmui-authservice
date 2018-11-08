import passport from 'passport';
import LocalStrategy from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';
import { encoder } from '@ncodefactory/rmui-passwd';
import { dbcfg, secrets } from './config/settings';

const localStrategyOptions = { usernameField: 'login' };
const localStrategy = new LocalStrategy(localStrategyOptions, (login, password, done) => {
  const encoded = encoder(secrets.encoder)(password);
  if (encoded === '') {
    return done(null, { login: 'demo' });
  }

  return done(null, false);
});

const jwtStrategyOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: dbcfg.secret,
};

const jwtStrategy = new JwtStrategy(jwtStrategyOptions, (payload, done) => {
  done(null, false);
});

passport.use(jwtStrategy);
passport.use(localStrategy);
