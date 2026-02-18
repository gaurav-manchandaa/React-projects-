import { useEffect, useState } from "react";
const time = 3000;
export default function DeleteConfirmation({ onConfirm, onCancel }) {
  const [RemainingTime , setRemainnigTime] = useState(time);

  useEffect(()=>{
    const timer = setInterval(()=>{
     setRemainnigTime (prev=> prev-10);
    },10)
    return ()=> clearInterval(timer);
  })
 useEffect(()=>{
  const timer =   setTimeout(() => {
      onConfirm();
    }, time)

   return function (){
    clearTimeout(timer);
   }
  },[onConfirm])
  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <progress value={time - RemainingTime} max={time}  />
    </div>
  );
}


// in the progress bar we move from left to right 
// that means when value time -remainning time  is moveing towards the max value 
// so this way it works


// about clean up function in the react 
// this clean up function demands an callback or a fucntion that it will exeutes 
// once the component is reders or mount up 