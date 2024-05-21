import "../../styles/ExploreGallery.css";
import { gallery } from "../../data/explore";

function ExploreGallery({ className, gallery }) {
  const photos = gallery.map((gallery, index) => (
    <img
      className="gallery__photo"
      key={index}
      src={gallery.image}
      alt={`food photos in ${gallery.location}`}
    />
  ));

  return <div className={`${className} gallery`}>{photos}</div>;
}

export default ExploreGallery;
