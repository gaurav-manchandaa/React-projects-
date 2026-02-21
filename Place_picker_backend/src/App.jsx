import { useRef, useState, useCallback, useEffect } from "react";
import Error from "./components/ERROR.jsx";
import Places from "./components/Places.jsx";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import logoImg from "./assets/logo.png";
import AvailablePlaces from "./components/AvailablePlaces.jsx";
import { UpdateuserPlaces , Initialpickedlocation} from "./http.js";

function App() {
  const selectedPlace = useRef();
  const [updatingPlacesError, setupdatingPlacesError] = useState();
  const [userPlaces, setUserPlaces] = useState([]);

  const [modalIsOpen, setModalIsOpen] = useState(false);


  useEffect(()=>{
    async function initialdata(){
      try {
        const resposedata = await Initialpickedlocation()
        setUserPlaces(resposedata.places);
      } catch (error) {
        setupdatingPlacesError({message : error.message || " unable to fetch data from the server"})
      }
    }
    initialdata();
   
  },[])

  function handleStartRemovePlace(place) {
    setModalIsOpen(true);
    selectedPlace.current = place;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }


  

  async function handleSelectPlace(selectedPlace) {
    setUserPlaces((prevPickedPlaces) => {
      if (!prevPickedPlaces) {
        prevPickedPlaces = [];
      }
      if (prevPickedPlaces.some((place) => place.id === selectedPlace.id)) {
        return prevPickedPlaces;
      }
      return [selectedPlace, ...prevPickedPlaces];
    });
    try {
      await UpdateuserPlaces([selectedPlace, ...userPlaces]);
      
    } catch (error) {
      setUserPlaces(userPlaces);
      setupdatingPlacesError({
        message:
          error.message ||
          "Error has been occured while updating places in database",
      });
    }
  }

  const handleRemovePlace = useCallback(async function handleRemovePlace() {
    setUserPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current.id)
    );
    try {
      await UpdateuserPlaces(userPlaces.filter(
        (place) => place.id !== selectedPlace.current.id
      ));
      
    } catch (error) {
      setUserPlaces(userPlaces);
      updatingPlacesError({message : error.message || " an error has been occured while Removing  the places"})
    }
   
    setModalIsOpen(false);
  }, [userPlaces]);

  function HandelErrorClose() {
    setupdatingPlacesError(null);
  }

  return (
    <>
      <Modal open={updatingPlacesError} onClose={HandelErrorClose}>
        {updatingPlacesError && (
          <Error
            title="ERROR has been occured "
            message={updatingPlacesError.message}
            onConfirm={HandelErrorClose}
          />
        )}
      </Modal>
      <Modal open={modalIsOpen} onClose={handleStopRemovePlace}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>PlacePicker</h1>
        <p>
          Create your personal collection of places you would like to visit or
          you have visited.
        </p>
      </header>
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText="Select the places you would like to visit below."
          places={userPlaces}
          onSelectPlace={handleStartRemovePlace}
        />

        <AvailablePlaces onSelectPlace={handleSelectPlace} />
      </main>
    </>
  );
}

export default App;
