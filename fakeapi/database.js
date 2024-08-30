import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_attendance_db2",
});

export const getUsers = (id) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      connection.query(
        "SELECT * FROM user WHERE u_id = ?",
        [id],
        (error, results) => {
          connection.release();
          if (error) {
            return reject(error);
          }
          resolve(results);
        }
      );
    });
  });
};
