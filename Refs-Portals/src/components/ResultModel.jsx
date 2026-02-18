import { useRef } from "react";
import { useImperativeHandle } from "react";
import{createPortal} from 'react-dom'
export function ResultModel({targettime,ref,remainingtime,onselect }) {

    const result = remainingtime<=0;
    const score  = Math.round(1-(remainingtime/(targettime*1000))*100).toFixed();
    const display = useRef();
    useImperativeHandle(ref,()=>({
        open(){
            display.current.showModal();
        }
    }))
  return createPortal(
    <dialog className="result-modal" ref={display}  >
        {result?<p>you loose {remainingtime/1000}</p>:<p>your score is {score}</p>}
      <p>
        your time was <strong>{targettime} </strong> secounds
      </p>
      <p>
        you stop on <strong> {remainingtime/1000} secounds left </strong>
      </p>
      <form method="dialog" onSubmit={onselect}>
        <button>close</button>
      </form>
    </dialog>,document.getElementById('modal')
    
  );
}
