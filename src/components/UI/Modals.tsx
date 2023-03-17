import React from "react";
import "./Modals.css";

const Modals:React.FC<{message:string , onClick:()=>void}> = (props) => {
  return (
    <div>
      <div className="backdrop" onClick={props.onClick}></div>
      <div className="overlay">{props.message}</div>
    </div>
  );
};

export default Modals;
