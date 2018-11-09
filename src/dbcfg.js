import fs from 'fs';
import path from 'path';
import { mtns, tnsn } from '@ncodefactory/rmui-mtns';
import { decoder } from '@ncodefactory/rmui-passwd';

let config = {};
((cfgDirectoryName) => {
  const maatTnsContent = fs.readFileSync(path.join(cfgDirectoryName, 'maat.tns'), 'utf-8');
  const mtnses = mtns(maatTnsContent);

  const tnsContent = fs.readFileSync(path.join(cfgDirectoryName, 'tnsnames.ora'), 'utf-8');
  const connStrs = tnsn(tnsContent);

  config = mtnses.reduce((map, obj) => {
    const mapped = map;
    const connStrItem = connStrs.find(csi => csi.name === obj.connStrName);
    if (connStrItem == null) {
      console.error(`tnsname for mtns ${obj.name} not found`); //eslint-disable-line
    }

    mapped[obj.name] = {
      user: obj.user,
      password: decoder(process.env.ENCODER_SECRET)(obj.passwd),
      connectString: connStrItem.connStr,
    };
    return mapped;
  }, {});
})(process.env.MTNS_AND_TNS_FILES_DIRECTORY);

const dbcfgs = config;

export default dbcfgs;
