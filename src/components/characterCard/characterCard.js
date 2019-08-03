import React from "react";
import "./characterCard.css";

const CharacterCard = props => (
  <div className="card">
  <div className="img-container">
      {/*onClick will call selectCharacter in App.js and pass character parameter*/}
      <a onClick={() => props.selectCharacter(props.name)} 
          className={props.currentScore === 0 ? "imgStyle imgStylePrevious" : "imgStyle"}>
          <img className="cusImg" alt={props.name} src={props.image} />
      </a>
  </div>
</div>
);

export default CharacterCard;