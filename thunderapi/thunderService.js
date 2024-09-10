import {
  getAttendaceApprovalDetails,
  getUserInOutDetails,
  getUserlatestOutDetails,
  setApprovalDetails,
  setAttendanceInDetails,
  setAttendanceOutDetails,
} from "./database.js";

function getSriLankaDateOnly(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Colombo",
  };
  return new Intl.DateTimeFormat("en-CA", options).format(date); // 'en-CA' gives 'yyyy-mm-dd' format
}
function getSriLankaTimeOnly(dateString) {
  const date = new Date(dateString);
  const options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Colombo",
    hour12: false,
  };
  return new Intl.DateTimeFormat("en-GB", options).format(date); // 'en-GB' gives 'hh:mm:ss' format
}

function getSriLankaDateTime(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Colombo",
    hour12: false,
  };
  const datePart = new Intl.DateTimeFormat("en-CA", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    timeZone: "Asia/Colombo",
  }).format(date);
  const timePart = new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZone: "Asia/Colombo",
    hour12: false,
  }).format(date);
  return `${datePart} ${timePart}`;
}

export const setAttendanceInDetailsService = async (body) => {
  try {
    const newBody = {
      ...body,
      date: getSriLankaDateOnly(body.date),
      startTime: getSriLankaTimeOnly(body.startTime),
    };

    const response = await setAttendanceInDetails(newBody);
    return {
      insertId: response.insertId,
      status: true,
      message: "Successfully added the user",
    };
    return null;
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
    const newBody = {
      ...body,
      endTime: getSriLankaTimeOnly(body.endTime),
    };

    const response = await setAttendanceOutDetails(newBody);

    return {
      status: true,
      message: "Successfully updated the record",
      data: response,
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

export const getAttendaceApprovalDetailsService = async (userId) => {
  try {
    const response = await getAttendaceApprovalDetails(userId);

    const formattedResponse = response.map((item) => ({
      ...item,
      wd_date: item.wd_date ? getSriLankaDateOnly(item.wd_date) : item.wd_date,
      wda_time: item.wda_time ? getSriLankaDateTime(item.wda_time) : item.wda_time,
    }));

    return {
      data: formattedResponse,
      status: true,
      message: "Successfully fetched",
    };
  } catch (error) {
    console.error(
      "Get user input detail service error occurred in thunderService",
      error
    );
    throw {
      data: null,
      message: "Get user input detail service error occurred in thunderService",
      status: false,
    };
  }
};

export const setApprovalDetailsService = async (data) => {
  try {
    const formatteddata = {
      ...data,
      date: getSriLankaDateTime(data.date),
      dateOnly: getSriLankaDateOnly(data.date),
    };

    const response = await setApprovalDetails(formatteddata);
  } catch (error) {
    console.error("setApprovalDetailsService error occured in thnderService");
    throw {
      message: "setApprovalDetailsService error occured in thnderService",
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
      data: null,
      message:
        "Get user latest out details service error occured in thnderService",
      status: false,
    };
  }
};
