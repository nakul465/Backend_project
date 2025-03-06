import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pets from "./pages/Pets";
import ContactUs from "./pages/ContactUs";
import PostPet from "./pages/PostPet";
import AdoptionApplication from "./pages/AdoptionApplication"; // Import new page
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/post-pet" element={<PostPet />} />
        <Route path="/adoption-application" element={<AdoptionApplication />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
