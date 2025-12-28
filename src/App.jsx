import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Explore from "./components/explore/Explore";
import Gallery from "./components/explore/Gallery";
import Pricing from "./components/pricing/Pricing";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/gallery/:id" element={<Gallery />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="*" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;