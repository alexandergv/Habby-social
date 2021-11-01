import { Component } from "react";
import React from 'react';
import Navbar from '../navbar/navbar'
import Register from '../register/register'

class App extends Component {
     render()
     {
         return(
             <div >
             <Navbar/>
              <Register/>
             </div>
             
                      )
     }
}

export default App;