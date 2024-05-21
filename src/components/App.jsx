import { useState } from "react";
import "./App.css";
import Header from "./basic/Header";
import Footer from "./basic/Footer";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Culture from "./pages/Culture";
import Contact from "./pages/Contact";
import Explore from "./pages/Explore";

function App() {
  const [page, setPage] = useState("/");

  return (
    <>
      <Header setPage={setPage} />
      <main className="main" id="main">
        {page === "/" && <Home />}
        {page === "/recipe" && <Recipe />}
        {page === "/culture" && <Culture />}
        {page === "/explore" && <Explore />}
        {page === "/contact" && <Contact />}
      </main>
      <Footer />
    </>
  );
}

export default App;
