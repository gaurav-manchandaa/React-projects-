import { useState } from "react";
import Places from "./Places.jsx";
import { useEffect } from "react";
import Error from "./ERROR.jsx";
import { sortPlacesByDistance } from "../loc.js";
import { fetchplaces } from "../http.js";

export default function AvailablePlaces({ onSelectPlace }) {
  const [Availabelplaces, setAvailableplaces] = useState([]);
  const [isfeteching, setisfeteching] = useState(false);
  const [error, seterror] = useState();

  useEffect(() => {
    async function fetechPlaces() {
      setisfeteching(true);
      try {
        const places = await fetchplaces();

        navigator.geolocation.getCurrentPosition((position) => {
          const updatedlplaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude
          );
          setAvailableplaces(updatedlplaces);
          setisfeteching(false);
        });
      } catch (error) {
        seterror({
          message: error.message || " failed to load data Error has occured",
        });
        setisfeteching(false);
      }
    }
    fetechPlaces();
  }, []);









  if (error) {
    return <Error title="Error " message={error.message} />;
  }
  // this would also work for this















  return (
    <Places
      title="Available Places"
      places={Availabelplaces}
      loadingtext={"Data is being loading"}
      isloading={isfeteching}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}

// it is possible when we are working with this type of work
// we should have show the loading phase to the userPlaces
