import jwt from 'jwt-simple';

const forUser = (user) => {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.login, iat: timestamp }, process.env.TOKEN_SECRET);
};

export default forUser;
