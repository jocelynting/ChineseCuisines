import { useState } from 'react';
import './App.css';
import Header from './basic/Header';
import Footer from './basic/Footer';
import Home from './pages/Home';
import Recipe from './pages/Recipe';
import Culture from './pages/Culture';
import Contact from './pages/Contact';
import Explore from './pages/Explore';

function App() {
  const [page, setPage] = useState('/chinese-cuisines');

  return (
    <>
      <Header setPage={setPage} />
      <main className="main" id="main">
        {(page === '/chinese-cuisines' || page === '/') && <Home />}
        {page === '/chinese-cuisines/recipe' && <Recipe />}
        {page === '/chinese-cuisines/culture' && <Culture />}
        {page === '/chinese-cuisines/explore' && <Explore />}
        {page === '/chinese-cuisines/contact' && <Contact />}
      </main>
      <Footer />
    </>
  );
}

export default App;
