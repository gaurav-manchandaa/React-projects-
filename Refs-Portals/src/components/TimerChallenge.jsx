import { useRef } from "react";
import { useState } from "react";
import { ResultModel } from "./ResultModel";
export default function TimerChallenge({ title, targettime }) {
    const display = useRef();
  let tarVar = useRef();
  const [timeremaining, settimeremaining]  = useState(targettime * 1000);


  if (timeremaining<=0){
    clearInterval(tarVar.current);
    tarVar.current = null;
    display.current.open();
  }


  function start (){
    if (tarVar.current) return;
    tarVar.current  = setInterval(() => {
        settimeremaining(prev=> prev-10);
    }, 10);
  }


  function stop (){
    clearInterval(tarVar.current);
    tarVar.current = null;
    display.current.open();
  }
  function Handelsubmit (){
    settimeremaining(targettime*1000);
  }


  return (
    <>
      <ResultModel  ref={display} 
      targettime={targettime}
      remainingtime={timeremaining}
      onselect={Handelsubmit}
      />
      <section className="challenge">
        <h2>{title}</h2>
        
        <p className="challenge-time">
            {targettime} secounds 
        </p>
        <p>
          <button onClick={timeremaining===targettime*1000 ? start : stop}>
            {timeremaining===targettime*1000 ? "start" : "Stop"}
          </button>
        </p>
        <p> {timeremaining<targettime*1000 ? "Time running " : " Time is awaited"} </p>
        
      </section>
    </>
  );
}


// now in this i have to add functioanality
// in such a way that when time start  button should reflect stop 
// and if it is stop then it should reflect start 
// and same case on that in paragraph below it 
// this is the sole functioanality we have to do in this game 
// and now we have to think about its solution 


// basic funda when time would start we have to make two functionaltu 
// when time is started 
// and to stop time 
// we have to have these two functionalty

// mare pas target time h 
// and then us target time ko lekar mujhe 
// esse function creater karna jissme 


// now in this we have to access the content of result model then i have to use useref 


// this is an classic example when you have to useref 
// useref gives an dom full access 