import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Fab from "./components/Fab";
import Kachchh from "./pages/white-rann-of-kachchh";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="white-rann-of-kachchh" element={<Kachchh />} />
      </Routes>
      <Footer />
      <Fab />
    </BrowserRouter>
  );
}

export default App;
