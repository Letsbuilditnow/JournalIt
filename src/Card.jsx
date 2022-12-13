import React from "react";
import "./Card.css";
function Card(props) {
  return (
    <>
      <section className="travel-details-container">
        <section className="travel-image">
          <img src={props.imageUrl} alt="Place-photo" className="main-image" />
        </section>
        <section className="travel-details">
          <span className="place">
            {props.location}
            <span className="place-location">
              <a href={props.googleMapsUrl}>View on Google Maps</a>
            </span>{" "}
          </span>

          <h1>{props.title}</h1>
          <span>
            {props.startDate} - {props.endDate}
          </span>
          <p>{props.description}</p>
        </section>
          <hr ></hr>
      </section>
      
     
    </>
  );
}

export default Card;
