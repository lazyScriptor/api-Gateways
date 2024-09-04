import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_attendance_db",
});

export const getUsers = async (id) => {
  try {
    const [rows] = await pool.query("SELECT * FROM user WHERE u_id = ?", [id]);

    return rows;
  } catch (error) {
    throw error;
  }
};

export const addUser = async (user) => {
  try {
    // Get a connection from the pool

    // Prepare the SQL statement
    const sql = `
      INSERT INTO user (u_id, u_pno, u_address, u_urid, u_fname, u_lname) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    // Execute the query
    const [result] = await pool.query(sql, [
      user.u_id,
      user.u_pno,
      user.u_address,
      user.u_urid,
      user.u_fname,
      user.u_lname,
    ]);

    return result;
  } catch (error) {
    throw error;
  }
};
export const getAuthDetails = async (credentials) => {
  try {
    const [results] = await pool.query(
      "SELECT u_username FROM user WHERE u_username = ?",
      [credentials.username]
    );
    if (results.length == 0) {
      console.log("test");
      return { results: "Username not found", authStatus: false };
    } else {
      const [results] = await pool.query(
        "SELECT user_role.ur_type,user.u_fname,user.u_lname FROM user JOIN user_role ON user.u_urid=user_role.ur_id WHERE user.u_username =? AND user.u_password =?",
        [credentials.username, credentials.password]
      );
      if (results.length > 0) {
        return { results: results[0], authStatus: true };
      } else {
        return {
          results: "User name and password missmatched",
          authStatus: false,
        };
      }
    }
  } catch (err) {
    console.log("Error", err);
    return {
      results: "Error occured in the backend Login API",
      authStatus: false,
    };

    console.log(err);
  }
};
