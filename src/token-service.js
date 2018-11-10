import { uuid4 } from 'fast-uuid';
import jwt from 'jsonwebtoken';

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

export default jwtSign;
