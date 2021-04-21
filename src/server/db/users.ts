import { connection } from "./index";

export const getUser = async () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * from users', (err, result) => {
      if (err) {
        return reject(err);
      }
      resolve(result)
    })
  })
};

export default {
  getUser,
};
