import React from "react";
import "./TravelBlog.css";

const TravelBlog = (props) => {
  return (
    // JSX code for standard travel blog component
    <div className="travel-blog-wrapper">
      <h3 className="place-heading">{props.heading}</h3>
      <div className="image-container">
        <img
          src={props.img1}
          alt="Location Picture 1"
          className="place-image"
        />
        <img
          src={props.img2}
          alt="Location Picture 2"
          className="place-image"
        />
        <img
          src={props.img3}
          alt="Location Picture 3"
          className="place-image"
        />
      </div>
      <p className="place-description">{props.desc}</p>
    </div>
  );
};

export default TravelBlog;
