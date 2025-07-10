import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer.jsx";
import Navbar from "./Components/navbar";
import HomePage from "./HomePage.jsx";
import Request from "./Request/Request.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/request" element={<Request />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
