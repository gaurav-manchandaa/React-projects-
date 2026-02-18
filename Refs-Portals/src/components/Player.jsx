import { useState,useRef } from "react";

export default function Player() {
  
  // since we have to change ui of the webpage we have to use Sate hook in i targettime
  const displaydata = useRef();
  const [name , setname]=useState("")
  function handelinput(){
    setname(displaydata.current.value);
    displaydata.current.value ="";
  }
  return (
    <section id="player">
      <h2>{name ? `welcome ${name}`:"An unkown entity "} </h2>
      <p>
        <input type="text" ref={displaydata}/>
        <button onClick={handelinput}>Set Name</button>
      </p>
    </section>
  );
}
// by this we can use useref to pass an value in the function 
// and then we have to delete the name once it have

// when we use onchange function then it will excute in every key storke enterd by the use 
// in this case we have an hook called usseref 