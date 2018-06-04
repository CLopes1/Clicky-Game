import React from "react";
import "./main.css";

const Main = props => (

  <div>
    {props.images.map(image => (
      <div
        className="card"
        onClick={() => {
          props.onImageClick(image.id);
        }}
      >
        <div className="col-md-3">
          <div>
            <button href="#">
              <img  
                src={image.image} 
                alt={image.name} 
                height="150px"
                width="250px"
                />
            </button>
          </div>
        </div>
      </div>
    ))}

  </div>
);

export default Main;
