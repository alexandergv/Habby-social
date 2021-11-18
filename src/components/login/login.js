import React, { Component } from "react";
import { Redirect } from "react-router-dom"

class Login extends Component {


    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        }

        this.LoginUser = this.LoginUser.bind(this);
        this.handlechange = this.handlechange.bind(this);
    }

    LoginUser(e) {
        console.log(this.props);
        e.preventDefault();
        fetch('/api/habby/user/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state)
        }).then(res => res.json()).
            then(data =>
                {
                console.log(data.auth);
                this.props.history.push('/');
                }
                );
              



    }

    handlechange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });

    }

    render() {
        return (
            <div className="container ">
                <h2>Inicio de Sesion</h2>
                <div className="card container blue lighten-5" >
                    <form onSubmit={this.LoginUser}>
                        <div className="card-content ">
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name='email' className="white " onChange={this.handlechange} placeholder="Correo Electronico"></input>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input name='password' className="white " onChange={this.handlechange} placeholder="Contraseña"></input>
                                </div>
                            </div>
                            <div className="row">
                                <button className="btn waves-effect blue darken-3" type="submit" >Iniciar Sesion</button>
                            </div>
                        </div>

                    </form>

                </div>
            </div>
        )
    }

}

export default Login;