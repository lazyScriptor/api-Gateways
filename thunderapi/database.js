// database.js
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_attendance_db",
  connectionLimit: 10,
});

export const setAttendanceInDetails = async (body) => {
  try {
    const [results] = await pool.query(
      `
      INSERT INTO work_duration (wd_requesting_user_id, wd_date, wd_start_time) VALUES (?, ?, ?)
      `,
      [body.userId, body.date, body.startTime]
    );
    return results;
  } catch (error) {
    console.error("Error in setAttendanceInDetails:", error);
    throw error;
  }
};

export const setAttendanceOutDetails = async (body) => {
  try {
    const [results] = await pool.query(
      `
      UPDATE work_duration SET wd_end_time = ? WHERE wd_requesting_user_id = ? AND wd_id = ?
      `,
      [body.endTime, body.userId, body.sessionToken]
    );

    return results;
  } catch (error) {
    console.error("Error in setAttendanceOutDetails:", error);
    throw error;
  }
};
export const getUserInOutDetails = async (userId) => {
  try {
    const [response] = await pool.query(
      `
      SELECT * FROM work_duration WHERE wd_requesting_user_id = ?
      `,
      [userId]
    );
    return response;
  } catch (error) {
    console.error("Error in getUserDetails:", error);
    throw error;
  }
};
export const getUserlatestOutDetails = async (userId) => {
  try {
    const [response] = await pool.query(
      `
      SELECT * FROM work_duration WHERE wd_requesting_user_id = ? AND wd_end_time is NULL 
    `,
      [userId]
    );
    return response;
  } catch (error) {
    console.error("Error in getUserlatestOutDetails database.js");
    throw error;
  }
};
export const getAttendaceApprovalDetails = async (userId) => {
  try {
    const [response] = await pool.query(
      `
  SELECT
    work_duration.*,
    work_duration_approval.*,
    approving_user.u_fname AS approving_user_fname,
    approving_user.u_lname AS approving_user_lname,
    requesting_user.u_fname AS requesting_user_fname,
    requesting_user.u_lname AS requesting_user_lname
  FROM work_duration 
  LEFT JOIN work_duration_approval 
    ON work_duration.wd_wda_id = work_duration_approval.wda_id 
  LEFT JOIN user AS approving_user
    ON approving_user.u_id = work_duration_approval.wda_approved_user_id
  LEFT JOIN user AS requesting_user
    ON requesting_user.u_id = work_duration.wd_requesting_user_id



    `,
      [userId]
    );

    return response;
  } catch (error) {
    console.error("Error in getUserlatestOutDetails database.js");
    throw error;
  }
};

export const setApprovalDetails = async (data) => {
  const {
    approvalStatus,
    approvedUserId,
    approvedTime,
    date,
    requestingUserId,
  } = data;
  try {
    const [response] = await pool.query(
      `
      INSERT INTO work_duration_approval (wda_approved_user_id,wda_time,wda_approval_status) VALUES (?,?,?)
      `,
      [data.approvedUserId, data.date, data.approvalStatus]
    );
    const insertId = response.insertId;

    const response2 = await pool.query(
      `
      UPDATE work_duration
      SET wd_wda_id = ?
      WHERE wd_requesting_user_id = ? AND wd_date =? 
      `,
      [insertId, requestingUserId, data.dateOnly]
    );
  } catch (error) {
    console.error("Error in setApprovalDetails database.js");
    throw error;
  }
};
