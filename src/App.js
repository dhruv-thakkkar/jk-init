import { BrowserRouter, Routes, Route } from 'react-router-dom' 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
function App() {
  return (
    <BrowserRouter >
    <div className="App">
    <Navbar />
    </div>
    <Routes>
    <Route path="/" element={<Home />} />
    </Routes>
    <Footer />

    </BrowserRouter>
   
  )
}

export default App;
