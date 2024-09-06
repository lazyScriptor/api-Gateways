// database.js
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'employee_attendance_db',
  connectionLimit: 10, // Adjust as needed
});

export const setAttendanceInDetails = async (body) => {
  console.log(body)

  try {
    const [results] = await pool.query(
      `
      INSERT INTO work_duration (wd_requesting_user_id, wd_date, wd_start_time) VALUES (?, ?, ?)
      `,
      [body.userId, body.date, body.startTime]
    );
    return results;
  } catch (error) {
    console.error('Error in setAttendanceInDetails:', error);
    throw error;
  }
};

export const setAttendanceOutDetails = async (body) => {
  console.log(body)
  try {
    const [results] = await pool.query(
      `
      UPDATE work_duration SET wd_end_time = ? WHERE wd_requesting_user_id = ? AND wd_id = ?
      `,
      [body.endTime, body.userId, body.sessionToken]
    );
    return results;
  } catch (error) {
    console.error('Error in setAttendanceOutDetails:', error);
    throw error;
  }
};
