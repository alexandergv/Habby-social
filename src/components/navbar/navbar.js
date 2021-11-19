import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            logged: <span hidden={false}></span>
        };

        this.checkLogged = this.checkLogged.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    logOut(e){
        e.preventDefault;
        fetch('API/habby/user/logout')
        .then( window.location.reload());
    }

    checkLogged() {
        fetch('API/habby/user/getUser')
            .then(res => res.json())
            .then(x => {
                console.log(x)
                if(x.auth == false)
                {
                    this.setState({logged:<span><li><Link to="/register">Registrarse</Link></li><li><Link to="/login">Iniciar Sesion</Link></li></span>})
                    
                }
                else
                {
                this.setState({ logged:<span><li><Link to="/profile">{x.userName}</Link></li><li><Link to='' onClick={this.logOut}>Cerrar Sesion</Link></li></span>});
                 }
            })
            .catch(err => console.log(err));
            


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
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Navbar;