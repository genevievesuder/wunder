import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Gallery from './components/Gallery';
import Homepage from './components/Homepage';

function App() {

  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 1000) {
        setScrollTop(true);
      } else {
        setScrollTop(false);
      }
    });
  }, []);
  const bottomToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div>
      <Navbar />
        <div className="App">
          <Routes>
           {/* <Route path="/" element={<Homepage/>} />
           <Route path="*" element={<NotFound/>} /> */}
           <Route path="/" element={<Homepage/>} />
           <Route path="/gallery" element={<Gallery/>} />
          </Routes>
          {scrollTop && (
        <button onClick={bottomToTop} className="backToTop">
          &#8593;
        </button>
      )}
        </div>
    </div>
  );
}

export default App;
