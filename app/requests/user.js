export const getUsers = async (setUser) =>
    await fetch("http://localhost:3000/api/users/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUser(data));