import React from "react";
import "./style.css";

const Card = (props) => {
  return (
    <div class="card mb-4 box-shadow card-animation">
      <a href={props.url} target="_blank" rel="noopener noreferrer">
        <h2 className="text-center my-3">{props.title}</h2>
        <div className="img-scrolling-wrapper">
          <img
            class="card-img-top"
            src={require(`../../../assets/screenshots/${props.image}`).default.toString()}
            alt="Card cap"
          />
        </div>
      </a>
      <div className="card-body-wrapper">
        <div class="card-body">
          <p class="card-text">{props.description}</p>
          <h5 className="mb-0">Technical stack:</h5>
          <p class="card-text mb-0">{props.stack}</p>
          <a href={props.githubUrl} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
