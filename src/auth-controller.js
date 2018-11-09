import dbcfg from './dbcfg';
import { jwtSign } from './token-service';
import getByMtnsLoginAndPasswd from './user-service';

const signin = async (req, res) => {
  const { login, passwd, mtns } = req.body;
  if (!login || !passwd || !mtns) {
    res.status(400).send('Error: Please enter the correct login, passwd and mtns');
  }
  try {
    const user = await getByMtnsLoginAndPasswd(mtns, login, passwd);
    if (!user) {
      res.status(401).send('Error: Invalid login or passwd.');
    }

    const dbConfig = dbcfg[mtns];
    if (!dbConfig) {
      res.status(401).send('Error: Invalid mtns.');
    }

    const token = jwtSign(user.id, user.login, mtns);
    res.status(200).send({ token });
  } catch (err) {
    res.status(500).send(`Error: ${err.message}`);
  }
};

const fetchMtnses = (req, res) => {
  const mtnses = Object.keys(dbcfg).sort();
  res.json(mtnses);
};

export { signin, fetchMtnses };
