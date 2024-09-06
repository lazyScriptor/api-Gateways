import { setAttendanceInDetails, setAttendanceOutDetails } from "./database.js";

export const setAttendanceInDetailsService = async (body) => {
  try {
    const response = await setAttendanceInDetails(body);
    return {
      insertId: response.insertId,
      status: true,
      message: "Successfully added the user",
    };
  } catch (error) {
    console.error(
      "User Id not found in the log. Please re-login to the system and try."
    );
    throw {
      message:
        "User Id not found in the log. Please re-login to the system and try.",
      status: false,
    };
  }
};

export const setAttendanceOutDetailsService = async (body) => {
  try {
    const response = await setAttendanceOutDetails(body);
    return {
      status: true,
      message: "Successfully updated the record",
    };
  } catch (error) {
    console.error("Session related error occurred in thunderService");
    throw {
      message: "Session related error occurred in thunderService",
      status: false,
    };
  }
};
