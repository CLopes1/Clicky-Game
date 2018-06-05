import React from "react";
import "./main.css";

const Main = props => (

  <div className="container">
    <div className="row">
    {props.images.map(image => (
        <img
          key={image.name}
          src={image.image}
          alt={image.name}
          height="200px"
          width="200px"
          onClick={() => props.onImageClick(image.id)}
        />
      ))}
    </div>
  </div>
);

export default Main;
