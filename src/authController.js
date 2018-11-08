import jwt from 'jsonwebtoken';
import { encoder } from '@ncodefactory/rmui-passwd';
import { uuid4 } from 'fast-uuid';
import dbcfg from './dbcfg';

const users = [{ id: 1, login: 'demo', passwd: 'test' }, { id: 2, login: 'maat', passwd: 'hello' }];
const signin = (req, res) => {
  const { login, passwd, mtns } = req.body;
  if (!login || !passwd || !mtns) {
    res.status(400).send('Error: Please enter the correct login, passwd and mtns');
  }

  const user = users.find(u => u.login === login && u.passwd === passwd);
  if (!user) {
    res.status(401).send('Error: Invalid login or passwd.');
  }

  const dbConfig = dbcfg[mtns];
  if (!dbConfig) {
    res.status(401).send('Error: Invalid mtns.');
  }

  const token = jwt.sign(
    {
      sub: user.id,
      login: user.login,
      mtns,
      session: uuid4(),
    },
    process.env.TOKEN_SECRET,
    { expiresIn: '3 hours' },
  );
  res.status(200).send({ access_token: token });
};

const fetchMtnses = (req, res) => {
  const mtnses = Object.keys(dbcfg).sort();
  res.json(mtnses);
};

export { signin, fetchMtnses };
