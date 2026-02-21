import { useState, useEffect } from "react";

import Places from "./Places.jsx";
import Error from "./Error.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchAvailablePlaces } from "../http.js";
import { usefetch } from "../../hook/useFetch.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [AvailablePosition, setAvailablePosition] = useState([]);
  const { isFetching, errorMessage, featchedData } = usefetch(
    fetchAvailablePlaces,
    []
  );

  useEffect(() => {
    if (!featchedData) return;
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPosition = sortPlacesByDistance(
        featchedData,
        position.coords.latitude,
        position.coords.longitude
      );
      setAvailablePosition(sortedPosition)
    });
   
  }, [featchedData]);

  if (errorMessage) {
    return <Error title="An error occurred!" message={errorMessage.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={AvailablePosition}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
// in this when we make an coostom hook and there we use them
// then if the values of that hook changes then the componenet in which we are using
// that hook will also get reredered
