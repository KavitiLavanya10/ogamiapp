import React,{useEffect, useRef} from "react"
import "../styles/modal.css";
import {ogamireactbaseurl} from "../utils/api";

const Modal=(props)=>{
    const modalRef = useRef(null)
    useEffect(()=>{
        if(props.open){
            document.body.style.overflow="hidden";
            modalRef.current.scrollIntoView({smooth:true})
        }

        return() => {
            document.body.style.overflow="visible";
        }
    },[])
    return (
        <div className="modal-container" ref={modalRef}>
        <div className="modal-backdrop" onClick={()=>props.setOpen(false)}></div>
        <div className="modal-content"></div>
        {props.children}
        </div>
    )
}
export default Modal;