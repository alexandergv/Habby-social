import { Component } from "react";
import React from 'react';
import Navbar from '../navbar/navbar'
import Register from '../register/register'
import Home from '../home/home'
import { Route, Switch } from 'react-router-dom';
import Login from "../Login/login";
import Profile from "../profile/profile";
import Post from "../post/post";

class App extends Component {

    constructor() {
        super();

    }
    


     render()
     {
         return(
             <div  >
             <Navbar/>

                    <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/post/:id" component={Post} />
                    </Switch>
                    </div>
             </div>
                      )
     }
}

export default App;