import fs from 'fs';
import { mtns as mtnses } from '@ncodefactory/rmui-mtns';
import forUser from './token';

let mtnsItems;
((maatTnsFilePath) => {
  fs.readFile(maatTnsFilePath, 'utf-8', (err, contents) => {
    if (err) {
      throw err;
    }

    mtnsItems = mtnses(contents);
  });
})('./src/config/maat.tns');

const signin = (req, res) => {
  const { login, mtns } = req.user;
  res.json({ token: forUser(req.user), login, mtns });
};

const fetchMtnses = (req, res) => {
  res.json(mtnsItems.map(mtnsItem => mtnsItem.name));
};

export { signin, fetchMtnses };
