export default function Gameover({winner,onselect}){
    return(
        <div id="game-over">
            <h2>Game over</h2>
            {winner ? <p>winner is {winner}</p>: <p>It's a draw</p>}
            <p><button onClick={onselect}>Restart</button></p>
        </div>
    )
}
// now when the button is cliked 
// we have to retstart the game 
// what does this mean making array index empty 
// gameboard to be the initial GameBoard
//winner and isdraw to be the null 
// these all functionalty this button has to do with 
// now this all data is in the app.jsx file 
// so i will define a function and pass it to there 