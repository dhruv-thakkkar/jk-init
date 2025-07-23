import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Fab from "./components/Fab";
import Kachchh from "./pages/white-rann-of-kachchh";
import Chardham from "./pages/chardham-yatra";
import Dubai from "./pages/dubai";
import Himachal from "./pages/himachal";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Chardham />} />
        <Route path="/about-us" element={<Home />} />
        <Route path="white-rann-of-kachchh" element={<Kachchh />} />
        <Route path="chardham-yatra" element={<Chardham />} />
        <Route path="himachal" element={<Himachal />} />
        <Route path="dubai" element={<Dubai />} />
      </Routes>
      <Footer />
      <Fab />
    </BrowserRouter>
  );
}

export default App;
