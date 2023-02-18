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
};
