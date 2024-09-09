import {
  getUserInOutDetails,
  getUserlatestOutDetails,
  setAttendanceInDetails,
  setAttendanceOutDetails,
} from "./database.js";

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
export const getUserInOutDetailsService = async (userId) => {
  try {
    const response = await getUserInOutDetails(userId);

    return {
      data: response,
      status: true,
      message: "Successfully fetched",
    };
  } catch (error) {
    console.error(
      "Get user inout detail service error occured in thnderService"
    );
    throw {
      data: null,
      message: "Get user inout detail service error occured in thnderService",
      status: false,
    };
  }
};

export const getUserLatestOutDetailsService = async (userId) => {
  try {
    const response = await getUserlatestOutDetails(userId);

    return {
      data: response,
      status: true,
      message: "Successfully fetched",
    };
  } catch (error) {
    console.error(
      "Get user latest out details service error occured in thnderService"
    );
    throw {
      data:null,
      message:
        "Get user latest out details service error occured in thnderService",
      status: false,
    };
  }
};
