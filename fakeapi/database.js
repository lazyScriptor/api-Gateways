import mysql from "mysql2/promise";

// Create a pool with `mysql2/promise`
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_attendance_db2",
});

export const getUsers = async (id) => {
  try {

    // Execute the query
    const [rows] = await pool.query(
      "SELECT * FROM user WHERE u_id = ?",
      [id]
    );



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
      user.u_lname
    ]);


    return result;
  } catch (error) {
    throw error;
  }
};
