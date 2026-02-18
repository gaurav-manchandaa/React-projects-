import { useRef } from "react"
import { useImperativeHandle } from "react";
import {createPortal} from 'react-dom'
export default function Model({children,ref,label}){
    const display = useRef();
    useImperativeHandle(ref,()=>({
        open(){
            display.current.showModal();
        }
    }))
    return createPortal(
        <dialog ref={display} 
        className="py-16 px-10 space-y-5  rounded-lg backdrop:bg-stone-400/60 bg-slate-100 "
        >
            {children}
            <form method="dialog"> <button className="bg-[#1E1817] text-sm md:text-lg px-6 py-2 rounded-xl text-gray-100 opacity-100 hover:opacity-90 shadow-md hover:shadow-gray-500">{label}</button></form>
        </dialog> , document.getElementById('modal-root')
    )
}
// now my 