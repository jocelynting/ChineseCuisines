import CultureStory from "../subcomponents/CultureStory";
import "../../styles/Culture.css";
import { useState } from "react";
import cultures from "../../data/cultures";

function Culture() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const story = cultures[currentIndex];

  const radioItems = cultures.map((culture, index) => (
    <input
      key={index}
      className="culture__selector"
      type="radio"
      name="story"
      value={index}
      checked={index === currentIndex}
      onChange={() => setCurrentIndex(index)}
    />
  ));

  const storyItems = cultures.map((culture, index) => (
    <CultureStory key={index} className="culture__story" story={culture} />
  ));

  return (
    <div className="culture">
      <div
        className="culture__stories"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {storyItems}
      </div>
      <div className="culture__selectors">{radioItems}</div>
    </div>
  );
}

export default Culture;
