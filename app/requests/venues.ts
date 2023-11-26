export const addVenue = async (setVenue: (data: any) => void) => {
  await fetch("http://localhost:3000/api/venue", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json()).then((data) => setVenue(data))
}

export const getVenue = async (setVenue: (data: any) => void, id: string) => {
  await fetch(`http://localhost:3000/api/venue/${id}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json()).then((data) => setVenue(data));
}