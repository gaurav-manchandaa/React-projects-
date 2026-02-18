import { useState } from "react";


// it is an array of size 3 and every element is an size of 3
// 3*3 matrix

export default function GameBoard({onslect,board}) {

    // const [updatedgameboard , setupdatedgameboard]=useState(intialgameboard);
    // function HandelSquareCliked(row,col){
    //     setupdatedgameboard((prevgameboard)=>{
    //         const updatedgame =[...prevgameboard.map(innerarray=>[...innerarray])]
    //         updatedgame[row][col] =Player;
    //         return updatedgame;
    //     })
    // }
    
  return (
    <ol id="game-board">
      {board.map((rowitem, rowindex) => (
        <li key={rowindex}>
          <ol>
            {rowitem.map((col, colindex) => (
              <li key={colindex}>
                <button onClick={()=>onslect(rowindex,colindex)}
                disabled={col!=null}
                >{col}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
// now inside the game board i have to display buttons
// you have to learn html and css along with it

// but those buttons are changing its value when clicked
// so we have to change it dynamacally
// so we have to make buttons dynamically

// map.((row,rowindex)=><li>is ka mtlb jitne baar row aye tum li bana</li>)
