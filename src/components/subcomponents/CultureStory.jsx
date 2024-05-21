import "../../styles/CultureStory.css";

function CultureStory({ className, story }) {
  return (
    <div className={`${className} story`}>
      <img className="story__image" src={story.image} alt={story.title} />
      <div className="story__details">
        <h2 className="story__title">{story.title}</h2>
        <p className="story__subtitle">{story.subtitle}</p>
        <p className="story__content">{story.content}</p>
      </div>
    </div>
  );
}

export default CultureStory;
