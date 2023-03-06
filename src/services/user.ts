import Hobby from "../models/hobby";
import User from "../models/user";

export const userApi = {
  registerUser: (user: User) => {
    console.log(JSON.stringify(user));
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
    fetch(`${import.meta.env.VITE_api_baseurl}/user/${userID}/hobby/${hobby}`, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({ hobby }),
    })
      .then((response) => response.status)
      .then((code) => {
        console.log("Success:", code);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
  deleteUserHobbies: (userID: string, hobby: string) => {
    fetch(`${import.meta.env.VITE_api_baseurl}/user/${userID}/hobby/${hobby}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "text/plain",
      },
      body: JSON.stringify({ hobby }),
    })
      .then((response) => response.status)
      .then((code) => {
        console.log("Success:", code);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  },
  getUserHobbies: (userID: string): Promise<Hobby[]> => {
    const hobbies = fetch(`${import.meta.env.VITE_api_baseurl}/user/${userID}/hobbies`, {
      method: "GET",
      headers: {
        "Content-Type": "text/plain",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        return data["hobbies"];
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    return hobbies;
  },
};
