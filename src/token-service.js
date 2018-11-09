import { uuid4 } from 'fast-uuid';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const jwtSign = (sub, login, mtns) => jwt.sign(
  {
    sub,
    login,
    mtns,
    session: uuid4(),
  },
  process.env.TOKEN_SECRET,
  { expiresIn: '3 hours' },
);

export { jwtCheck, jwtSign };
