import MajorCuisine from "../subcomponents/MajorCuisine";
import "../../styles/Home.css";
import cuisines from "../../data/cuisines";

function Home() {
  const majorCuisineItem = cuisines.map((cuisine) => (
    <MajorCuisine key={cuisine.title} cuisine={cuisine} />
  ));

  return (
    <div className="cuisines">
      <h2 className="cuisines__title">Eight major cuisines of China</h2>
      <div className="cuisines__list">{majorCuisineItem}</div>
    </div>
  );
}

export default Home;
