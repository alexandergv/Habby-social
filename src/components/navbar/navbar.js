import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

    constructor() {
        super();
        this.state = {
            logged: <span hidden={false}></span>
        };

        this.checkLogged = this.checkLogged.bind(this);
    }



    checkLogged() {
        fetch('API/habby/user/getUser')
            .then(res => res.json())
            .then(x => {
                console.log(x)
                this.setState({ logged:<li>{x.userName}</li>});
            })
            


    }

    componentDidMount()
    {
        this.checkLogged(); 
    }



    render() {
        return (
            <nav className=" blue accent-4" >
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo">HaBBy</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to="/">Inicio</Link></li>
                        {this.state.logged}
                        <li><Link to="/register">Registrarse</Link></li>
                        <li><Link to="/login">Iniciar Sesion</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Navbar;