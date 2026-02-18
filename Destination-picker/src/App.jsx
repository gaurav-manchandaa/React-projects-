import { useRef, useState, useEffect,useCallback } from 'react';

import Places from './components/Places.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

function App() {
  const modal = useRef();
  const selectedPlace = useRef();
  const [pickedPlaces, setPickedPlaces] = useState([]);
  const [Availablesortedplaces, setsortedplaces] = useState([]);
  const [open , setopen] = useState(false);

  function handleStartRemovePlace(id) {
    setopen(true);
    selectedPlace.current = id;
  }

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
    const sortedpositions = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude , position.coords.longitude);
    setsortedplaces(sortedpositions);
  })
  },[])
  // now this useeffect funciton will only renders in two situation =>first 
  // when the function rerenders 
  // secound when the dependency arrays changes 
  // this dependency array changes then this fucntions rereders again 
  // if we kep dependency array to be empty then this function will only renders once 
  // at the start of the project 


  // navigator.geolocation.getCurrentPosition((position)=>{
  //   const sortedpositions = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude , position.coords.longitude);
  //   setsortedplaces(sortedpositions);
  // })

 
  // the problem with this code is that it will run in a infinite loop 
  // when the main function will render that positions will also re renders 
  // but offcaurse we dont want this 
  // for this we have a hook called useeffect 
  function handleStopRemovePlace() {
    setopen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });
  }

  const handleRemovePlace =  useCallback(function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setopen(false);
  },[])


  return (
    <>
      <Modal ref={modal}
      open={open}
      >
        {open ?<DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />: null}
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
          fallbackText={'Select the places you would like to visit below.'}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={Availablesortedplaces}
          fallbackText="places are loading"
          onSelectPlace={handleSelectPlace}
        />   
      </main>
    </>
  );
}

export default App;
