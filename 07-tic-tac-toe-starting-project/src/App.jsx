import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import winningCombinations from "./components/Winning_Combination";
import Gameover from "./components/Gameover";
function getactivePlayer(turnes) {
  let activeplayer = "X";
  if (turnes.length > 0 && turnes[0].ActivePlayer === "X") activeplayer = "O";
  return activeplayer;
}


const intialgameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];


function App() {
  // const [activePlayer, setactivePlayer] = useState("X");
  const [PlayerLog, setPlayerLog] = useState([]);

  let activePlayer = getactivePlayer(PlayerLog);

  let gameboard = [...intialgameboard.map(item=>[...item])];
    for (const turn of PlayerLog){
        const {square, ActivePlayer} = turn;
        const {row , col} = square;
        gameboard[row][col] = ActivePlayer;
    }


    let winner = null;

    for(const combination of winningCombinations){
      const firstpos = gameboard[combination[0].row][combination[0].col];
      const secoundpos = gameboard[combination[1].row][combination[1].col];
      const thirdpos = gameboard[combination[2].row][combination[2].col];

      if (firstpos && firstpos===secoundpos && secoundpos===thirdpos){
        // the user have win the game 
        // the symbol which is there in the first pos and secound pos is the winner 
        winner = firstpos;
      }
    }

    let isdraw = PlayerLog.length===9 && !winner;

  function HandelSquareclicked(rowindex, colindex) {
    // setactivePlayer((prev) => (prev === "X" ? "O" : "X"));

    setPlayerLog((prevlog) => {
      // since you know that when we are managing data that is passed
      // as a refernce we will making a new data set
      let player = getactivePlayer(prevlog);

      const newlog = [
        { square: { row: rowindex, col: colindex }, ActivePlayer: player },
        ...prevlog,
      ];

      return newlog;
    });
    console.log(PlayerLog);
  }

  function gameoverfun(){
    setPlayerLog([]);

  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="player 1 "
            symbol="X"
            buttoncontent="edit"
            isActive={activePlayer === "X"}
          />
          <Player
            name="player 2"
            symbol="O"
            buttoncontent="edit"
            isActive={activePlayer === "O"}
          />
        </ol>
        {winner || isdraw ? <Gameover winner={winner} onselect={gameoverfun}/>:null}
        <GameBoard onslect={HandelSquareclicked} board = {gameboard}  />
      </div>
      <Log turns={PlayerLog} />
    
    </main>
  );
}

export default App;

// when we are placing image in the public folder then this
// image can be shown by the user while website openning
// and we can use this image without giving the path
// just by giving the name on it
// thats it we can give the image on import PropTypes from 'prop-types'

// now in this we need a combination to check wheather
// user has winned a game or not

// now to check winning combinations
// we have to check row and column index of the user that has been entered

// so for this i have to check the turns data because it contains that data
// for accsing ti i have to know the game board condition in it 
// to check the game board condition in it we have to need the game board 

// in this i have added functionality of winner 
// there is a chances that game is draw between then 