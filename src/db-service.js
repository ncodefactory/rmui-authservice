import oracledb from 'oracledb';
import dbcfg from './dbcfg';

const executeQuery = (mtns) => {
  const connAttrs = dbcfg[mtns];
  if (!connAttrs) {
    throw new Error(`dbcfg for ${mtns} not found`);
  }

  return async (sql, binds = {}) => {
    let connection;

    try {
      connection = await oracledb.getConnection(connAttrs);

      const options = {
        outFormat: oracledb.OBJECT,
        extendedMetaData: false,
      };

      const result = await connection.execute(sql, binds, options);

      return { rows: result.rows };
    } catch (err) {
      console.error(err); // eslint-disable-line no-console
      return { err };
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err); // eslint-disable-line no-console
        }
      }
    }
  };
};

export { executeQuery }; // eslint-disable-line
