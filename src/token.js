import jwt from 'jwt-simple';
import { dbcfg } from './config/settings';

const forUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.login, iat: timestamp }, dbcfg.secret);
};

export default forUser;
