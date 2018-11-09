import { executeQuery } from './db-service';

const getByIdAndPassword = async (mtns, id, passwd) => {
  const result = await executeQuery(mtns)(
    'select id from uzytkownicy where id=:id and haslo=:passwd',
    {
      id,
      passwd,
    },
  );

  if (result) {
    return { id: result[0].ID };
  }

  return null;
};

export default getByIdAndPassword;
