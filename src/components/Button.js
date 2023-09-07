import React, { useState } from "react";


function Button({buttonText}){
const [mouseOver, setmouseOver] = useState(false);
        

function handleMouseOver(){
    setmouseOver(true);
    
}

function handleMouseOut(){
    setmouseOver(false);
}



    return(
        <button 
        onMouseOut={handleMouseOut}
        style={mouseOver? {backgroundColor: "#4CFBB8"}: { backgroundColor: "white"}}
        onMouseOver={handleMouseOver}
        className="loginButton"
        >{buttonText}</button>
    )
}
export default Button;