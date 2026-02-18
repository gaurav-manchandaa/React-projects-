import { useState } from "react";

export default function Player({ name, symbol , isActive }) {
  const [playerinfo, setplayerinfo] = useState(name);

  const [isediting, setisediting] = useState(false);

  function HandelChange(event){
    setplayerinfo(event.target.value);
  }

  function HandelClick() {
    setisediting((prev) => !prev);
  }

  let playername = <span className="player-name">{playerinfo}</span>;

  if (isediting) {
    playername = <input type="text" required onChange={HandelChange}  value={playerinfo}/>;
  }

  return (
    <li className={isActive ? "active":null}>
      <span className="player">
        {playername}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={HandelClick}>{isediting ? "save" : "edit"}</button>
    </li>
  );
}

// now in this we want that when button is clicked then the span will
// disapper and input field should be shown
// and inside the button the content will show that save
// for this we have to change state
// when we want to change state we use Usestate

// we have done this by applying ternary operator
// which although is not a bad practise but we can store this all
// content on the variable and show that varaible
// only that will make our return to be more beutiful and systemetic

// what is components isolation
// component isolation means when we are reusing components
// then that component make diffrent diffrent instance
// and these instances are diffrent from each other
// if one changes then other  is isolated

// how does react handles state changes in it
// when we dont some changes in the state react does not do
// it immegeately but schedule it for the future
// that is why when you setisediting(!isediting)  and use it immegeadlt after
// no result is shown of the secound
// because it gets the outdated value in it
