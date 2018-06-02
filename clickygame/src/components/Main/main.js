import React from "react";
import "./main.css";

const Main = props => (
  <div>
    {props.images.map(image => (
      <div
        className="card"
        //onClick={props.onImageClick} // won't work because we have to pass an argument to onImageClick
        onClick={() => {
          props.onImageClick(image.id);
        }}
        style={{ height: '300px', width: '300px' }}
      >
        <div className="img-container">
          <img
            alt={image.name}
            height="300"
            src={image.image}
            width="300"
          />
        </div>
      </div>
  ))}
  </div>
);

export default Main;
