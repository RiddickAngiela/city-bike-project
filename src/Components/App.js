import React from 'react'
import NavBar from './NavBar';
import Login from './Login';
import Home from './Home';
import About from './About'
import Footer from './Footer'
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url("https://image.made-in-china.com/321f0j00DTfGNzbgTQcP/made-in-china.webp")`,
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
