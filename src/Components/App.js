import React from 'react'
import NavBar from './NavBar';
import Login from './Login';
import Home from './Home';
import About from './About'
import {Routes,Route} from "react-router-dom"


function App() {
  return (
    <div className="App">
      <NavBar/>
    <Routes>

        <Route  path="/home" element={<Home />}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path ='/' element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
