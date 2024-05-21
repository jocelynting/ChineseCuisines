import "../../styles/ExploreFilter.css";

function ExploreFilter({ className, location, onClick }) {
  return (
    <button className="filter__button" onClick={onClick}>
      {location}
    </button>
  );
}

export default ExploreFilter;
