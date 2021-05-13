//import
import React from 'react';
import "./Box.css";

//function component
const ShowProps = (props) => {
  return (
    <>
      <div className="Box">
        <img src={props.imageUrl} alt="icon" />
        <p>{props.text}</p>
      </div>
    </>
  );
};

//export
export default ShowProps;


