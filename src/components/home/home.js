import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {

constructor()
{
    super();
    this.state = {
        posts : [],
        token: ""
    }
    this.getPosts = this.getPosts.bind(this);
}


getPosts() 
{
    fetch('/api/habby/post').then( res => 
        res.json() )
        .then( data => {this.setState({posts : data}); });
}
componentDidMount()
{
this.getPosts();
}


render()
{
    return (
        <div className="container">
          <h4>Ultimas publicaciones</h4>
          {
              this.state.posts.map( x => {
                  return (
                      <div key={x._id} className="row">
                          <Link to={"/post/"+x._id}>
                      <div className="card ">
                          <div className="card-content">
                          <span className="card-title container"> {x.title}  </span>
                                 <h6 >{x.content}</h6>
                          </div>
                      </div>
                      </Link>
                      </div>
                  )
              } )
          }
        </div>
    );
}

}

export default Home;