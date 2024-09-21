// database.js
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee_attendance_db2",
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
    todayDate,
    requestingUserId,
    requestingDate
  } = data;
  try {
    // First Query - Insert into work_duration_approval
    const [response] = await pool.query(
      `
      INSERT INTO work_duration_approval (wda_approved_user_id, wda_time, wda_approval_status)
      VALUES (?, ?, ?)
      `,
      [approvedUserId, todayDate, approvalStatus]
    );
    const insertId = response.insertId;

    // Second Query - Update work_duration with insertId
    await pool.query(
      `
      UPDATE work_duration
      SET wd_wda_id = ?
      WHERE wd_requesting_user_id = ? AND wd_date =?
      `,
      [insertId, requestingUserId, requestingDate]
    );

    return {
      message: "Approval details set successfully",
      status: true,
    };
  } catch (error) {
    // Catch error and log details
    console.error("Error in setApprovalDetails database.js:", error);
    throw new Error(
      "Error occurred while setting approval details: " + error.message
    );
  }
};
