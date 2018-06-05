import React from "react";
import "./main.css";

const Main = props => (

  <div className="container">
    {props.images.map(image => (
      <div
        onClick={() => {
          props.onImageClick(image.id);
        }}
      >
            <div className="album py-5 mx-auto d-block">
              <div className="container">
                <div className="row">
                  <div className="col-md-4">
                    <div>
                      <button href="#">
                        <img
                          src={image.image}
                          alt={image.name}
                          height="200px"
                          width="100%"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
      </div>
    ))}

  </div>
);

export default Main;
