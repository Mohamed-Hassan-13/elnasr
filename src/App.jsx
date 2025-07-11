import { Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/navbar";
import HomePage from "./HomePage.jsx";
import Request from "./Request/Request.jsx";
import EquipmentsDetails from "./EquipmentsDetails/EquipmentsDetails.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request" element={<Request />} />
        <Route path="/:name" element={<EquipmentsDetails />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
