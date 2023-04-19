import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PackageDetails from './pages/PackageDetails';
import Packages from './pages/Packages';
function App() {
  return (
    <BrowserRouter >
    <div className="App">
    <Navbar />
    </div>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/packages/:id"element={<Packages />}  />
    <Route path="/package/:id"element={<PackageDetails />}  />
    </Routes>
    <Footer />

    </BrowserRouter>
   
  )
}

export default App;
