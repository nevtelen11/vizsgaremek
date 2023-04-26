
import './Button.css';
import datas from '../data.json'
import React from "react";


function Button(props) {
   return (props.trigger) ? (
    <div className="popup">
    <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTriggered(false)}>Vissza</button>
        {props.children}
    </div>

</div>
   ):""
}
export default Button