import forUser from './token';
import dbcfg from './dbcfg';

const signin = (req, res) => {
  const { login, mtns } = req.user;
  res.json({ token: forUser(req.user), login, mtns });
};

const fetchMtnses = (req, res) => {
  const mtnses = Object.keys(dbcfg).sort();
  res.json(mtnses);
};

export { signin, fetchMtnses };
