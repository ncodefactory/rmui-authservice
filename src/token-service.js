import { uuid4 } from 'fast-uuid';
import jwt from 'jsonwebtoken';
import expressjwt from 'express-jwt';
import dotenv from 'dotenv';

dotenv.config();

const jwtCheck = expressjwt({ secret: process.env.TOKEN_SECRET });
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
