import { set } from "mongoose";
import React, { Component } from "react";


class Register extends Component{


constructor()
{
    super();
    this.state= {
        userName: '',
        email:'',
        password: ''
    }

    this.registerUser = this.registerUser.bind(this);
    this.handlechange = this.handlechange.bind(this);
}

     registerUser(e)
     {
        e.preventDefault();
        fetch('/API/habby/user', {
                method: 'POST',
                body: JSON.stringify(this.state),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                }
        })
        .then(res => res.json())
        .then( data => {
        M.toast({html: 'Usuario registrado'});
        this.setState({userName: '', email: '', password: '' })
        console.log(data);
    })
        console.log(this.state);
     }

    handlechange(e)
    {
        const { name, value} = e.target;
        this.setState({ [name] : value});

    }

    render()
    {
        return(
            <div className="container ">
            <h2>Registo de Usuarios</h2>
                <div className="card container blue lighten-5" >
                    <form onSubmit={this.registerUser}>
                    <div className= "card-content ">
                        <div className="row"> 
                            <div className="input-field col s12 "> 
                                    <input name ="userName" className="white " onChange={this.handlechange} placeholder="Nombre de usuario"></input>
                            </div>
                    </div>
                        <div className="row"> 
                        <div className="input-field col s12"> 
                                <input name='email' className="white " onChange={this.handlechange}  placeholder="Correo Electronico"></input>
                            </div>
                        </div>
                        <div className="row"> 
                        <div className="input-field col s12"> 
                                <input  name='password' className="white " onChange={this.handlechange}  placeholder="Contraseña"></input>
                            </div>
                        </div>
                        <div className="row"> 
                        <button className="btn waves-effect blue darken-3" type="submit" >Registrar</button>
                        </div>
                    </div>

                    </form>

                </div>
         </div>
        )
    }

}

export default Register;