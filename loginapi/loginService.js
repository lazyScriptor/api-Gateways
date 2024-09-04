import { getUserAuthDetails, getUserByUsername } from "./database.js";

export const getAuthDetailsService = async (credentials) => {
  try {
    // Check if the username exists
    const userExists = await getUserByUsername(credentials.username);
    if (!userExists) {
      return { results: "Username not found", authStatus: false };
    }

    // If the username exists, check the password
    const userAuthDetails = await getUserAuthDetails(
      credentials.username,
      credentials.password
    );
    if (userAuthDetails) {
      return { results: userAuthDetails, authStatus: true };
    } else {
      return { results: "Username and password mismatch", authStatus: false };
    }
  } catch (error) {
    console.error("Error in service:", error);
    throw new Error("Service layer error");
  }
};
