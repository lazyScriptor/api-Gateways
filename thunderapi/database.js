import mysql from "mysql2";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_attendance_db",
});

export const setAttendanceDetails = async (body) => {
  try {
    const [results] = await pool.promise().query(
      `
      INSERT INTO work_duration (wd_requesting_user_id, wd_date, wd_start_time, wd_end_time) VALUES (?, ?, ?, ?)
      `,
      [body.userId, body.date, body.startTime, null]
    );

    return { data: results };
  } catch (error) {
    console.error("Error in setAttendanceDetails repository", error);
    return { data: null };
  }
};
