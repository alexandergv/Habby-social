import { Component } from "react";
import React from 'react';
import Navbar from '../navbar/navbar'
import Register from '../register/register'
import Home from '../home/home'
import { Route, Switch } from 'react-router-dom';
import Login from "../Login/login";
import Cookies from 'js-cookie';
import { token } from "morgan";

class App extends Component {

    constructor() {
        super();

        this.state= {
            token:  ''
        }
    }
    
    componentDidMount() 
    {
        const tokenC = Cookies.get("token");
        this.setState({token: tokenC}, ()=> {
        console.log(this.state.token);
        });
    }
    getUserData()
    {
        
    }

     render()
     {
         return(
             <div  >
             <Navbar token={this.state.token}/>

                    <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                    </Switch>
                    </div>
             </div>
                      )
     }
}

export default App;