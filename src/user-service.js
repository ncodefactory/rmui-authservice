import { executeQuery } from './db-service';

const getByIdAndPassword = async (mtns, id, passwd) => {
  const result = await executeQuery(mtns)(
    'select id, p_maat.SprawdzHaslo(:passwd,haslo) is_valid from uzytkownicy where id=:id',
    {
      id,
      passwd,
    },
  );

  if (result.rows[0] && result.rows[0].IS_VALID === 'TRUE') {
    return { id: result.rows[0].ID };
  }

  return null;
};

export default getByIdAndPassword;
