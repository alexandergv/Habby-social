import React, { Component } from "react";
import {Link} from "react-router-dom";
  
class Navbar extends Component
{
    render()
    {
        return(
            <nav className=" blue accent-4">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">HaBBy</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/register">Registrarse</Link></li>
                        <li><a href="badges.html">Components</a></li>
                        <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
        )
    }

}

module.exports = Navbar; 