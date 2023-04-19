/* import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom' 

import ReactDOM from 'react-dom';
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import About from "./pages/about";


ReactDOM.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>,
  document.getElementById('navbar')
);


ReactDOM.render(
  <React.StrictMode>
    <Packages />
  </React.StrictMode>,
  document.getElementById('packages')
); */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
