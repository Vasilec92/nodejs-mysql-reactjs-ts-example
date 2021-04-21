import * as mysql from "mysql";
import config from "../config";
import users from "./users";

export const connection = mysql.createConnection(config.mysql);

connection.connect((error) => {
  if (error) console.log(error);
});

export default {
  users,
};
