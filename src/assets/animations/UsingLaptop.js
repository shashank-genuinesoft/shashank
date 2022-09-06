import React from "react";
import "./UsingLaptop.css";
import IMG from "../../assets/Vector.svg"
function UsingLaptop(props) {
  const theme = props.theme;
  return (
   <img src={IMG} className="greet"></img>
  );
}

export default UsingLaptop;