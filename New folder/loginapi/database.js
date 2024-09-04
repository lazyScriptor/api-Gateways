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
export const getUserByUsername = async (username) => {
  try {
    const [results] = await pool.query("SELECT u_username FROM user WHERE u_username = ?", [username]);
    return results.length > 0;  // Return true if the user exists, false otherwise
  } catch (error) {
    console.error("Error in repository:", error);
    throw new Error("Database query error");
  }
};

// Check if the username and password match
export const getUserAuthDetails = async (username, password) => {
  try {
    const [results] = await pool.query(
      `SELECT user_role.ur_type, user.u_fname, user.u_lname
       FROM user
       JOIN user_role ON user.u_urid = user_role.ur_id
       WHERE user.u_username = ? AND user.u_password = ?`,
      [username, password]
    );
    return results.length > 0 ? results[0] : null;  // Return the user details if authenticated
  } catch (error) {
    console.error("Error in repository:", error);
    throw new Error("Database query error");
  }
};