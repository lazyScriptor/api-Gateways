import mysql from 'mysql2';

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_attendance_db",
});

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        return reject(err);
      }
      connection.query("SELECT * FROM user", (error, results) => {
        connection.release();
        if (error) {
          return reject(error);
        }
        resolve(results);
      });
    });
  });
};
