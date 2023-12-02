export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return resData.places;
}

export async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({
      places: places
    }), // we can use ({places}) because we have a key and value with the same name
    headers: {
      "Content-Type": "application/json"
    }
  })
  const resData = await response.json();

  if(!response.ok) {
    throw new Error("Could not update user places")
  }
  return resData.message;
}