import React from 'react';
import {NavLink} from "react-router-dom"


function NavBar() {

     return (
       <div className="stylenav">
         <NavLink className="NavLink" to="/">
           Login
         </NavLink>
         <NavLink className="NavLink" to="/home">
           Home
         </NavLink>
         <NavLink className="NavLink" to="/about">
           {" "}
           About
         </NavLink>
       </div>
     );

}
    

export default NavBar;