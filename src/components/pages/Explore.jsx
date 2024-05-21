import "../../styles/Explore.css";
import ExploreGallery from "../subcomponents/ExploreGallery";
import ExploreFilter from "../subcomponents/ExploreFilter";
import { gallery, locations } from "../../data/explore";
import { useState } from "react";

function Explore() {
  const [filter, setFilter] = useState("All");

  const filters = locations.map((location, index) => (
    <ExploreFilter
      key={index}
      location={location.name}
      onClick={() => setFilter(location.name)}
    />
  ));

  const filteredGallery =
    filter === "All"
      ? gallery
      : gallery.filter((photo) => photo.location === filter);

  return (
    <div className="explore">
      <div className="explore__filters">{filters}</div>
      <ExploreGallery className="explore__gallery" gallery={filteredGallery} />
    </div>
  );
}

export default Explore;
