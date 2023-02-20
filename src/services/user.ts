import User from "../models/user";

export const userApi = {
  registerUser: (user: User) => {
    fetch(`${import.meta.env.VITE_api_baseurl}/user`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
  registerUserHobbies: (userID: string, hobby: string) => {
    fetch(`${import.meta.env.VITE_api_baseurl}/user/${userID}/hobby`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({ hobby }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
  deleteUserHobbies: (userID: string, hobby: string) => {
    fetch(`${import.meta.env.VITE_api_baseurl}/user/${userID}/hobby`, {
      method: "DELETE",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({ hobby }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
};
