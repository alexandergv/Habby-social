import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

    constructor() {
        super()
    }
    componentDidUpdate()
    {
        console.log(this.props);
    }


    render() {
        return (
            <nav className=" blue accent-4" >
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">HaBBy</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/register">Registrarse</Link></li>
                        <li><Link to="/login">Iniciar Sesion</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Navbar;