import React, { useState, useEffect } from "react";
import Places from "./Places.jsx";
import Error from "./Error.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [fetchingData, setFetchingData] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [error, setError] = useState();

  // useEffect(() => {
  //   fetch("http://localhost:3000/places")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((resData) => {
  //       setAvailablePlaces(resData.places);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("http://localhost:3000/places");
  //       if (!response.ok) {
  //         throw new Error("Network response was not ok");
  //       }
  //       const resData = await response.json();
  //       setAvailablePlaces(resData.places);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    async function fetchPlaces() {
      setFetchingData(true);
      try {
        const response = await fetch("http://localhost:3000/places");
        const resData = await response.json();
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        setAvailablePlaces(resData.places);
      } catch (error) {
        setError({
          title: "Error!",
          message: error.message || "Something went wrong. Please try again later.",
        });
      }

      setFetchingData(false);
    }

    fetchPlaces();
  }, []);

  if (error) {
    return (
      <Error
        title={error.title}
        message={error.message}
      />
    );
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={fetchingData}
      loadingText={"Fetching place data...please wait!"}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
