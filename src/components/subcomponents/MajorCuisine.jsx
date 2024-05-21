import "../../styles/MajorCuisine.css";
import { useState } from "react";

function MajorCuisine({ cuisine }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const intro = (
    <div className="cuisine__front">
      <img
        className="cuisine__front-image"
        src={cuisine.image}
        alt={cuisine.imageAlt}
      />
      <p className="cuisine__front-title">{cuisine.title}</p>
      <p className="cuisine__front-content">{cuisine.content}</p>
      <button className="cuisine__front-link" onClick={handleFlip}>
        Learn More
      </button>
    </div>
  );

  const details = (
    <div className="cuisine__back">
      <p className="cuisine__back-title">{cuisine.title}</p>
      <p className="cuisine__back-content">{cuisine.details}</p>
      <button className="cuisine__back-link" onClick={handleFlip}>
        Back
      </button>
    </div>
  );

  return (
    <div className={`cuisine ${isFlipped ? "cuisine-flipped" : ""}`}>
      {isFlipped ? details : intro}
    </div>
  );
}

export default MajorCuisine;
