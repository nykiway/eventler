export const getUserEvents = async (setUserEvents: (data: any) => void) =>
    await fetch("http://localhost:3000/api/user/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setUserEvents(data));


export const getEvent = async (setEvent: (data: any) => void, id: string) =>
  await fetch(`http://localhost:3000/api/event/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => setEvent(data));
