import { setAttendanceDetails } from "./database.js";

export const setAttendanceDetailsService = async (body) => {
  try {
    const response = await setAttendanceDetails(body);
    if (response) {

      return {
        insertId: response.data.insertId,
        status: true,
        message: "successfully added the user",
      };
    }
  } catch (error) {
    console.error(
      "User Id not found in the log.Please re login to the system and try"
    );
    throw new Error({
      message:
        "User Id not found in the log.Please re login to the system and try",
      status: false,
    });
  }
};
