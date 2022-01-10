import React, {Component} from "react";

class Post extends Component {

constructor(props)
{
    super(props);
    this.state = {
        title : '',
        content : '',
        image :   ''
    }

    this.getPost = this.getPost.bind(this);
    this.paramID =  this.props.match.params.id;
}

componentDidMount()
{
    this.getPost();
    console.log(this.paramID);
}

getPost() 
{
    fetch(`/api/habby/post/${this.paramID}`)
    .then( res => res.json())
    .then( post => {
        this.setState({title: post.title, content: post.content});
        console.log(post);
    })
    ;
}


render()
{
    return(
        <div>
            <div className="container">
                <h3>{this.state.title}</h3>
                <hr/>
                <h5>{this.state.content}</h5>
            </div>
        </div>

    )
}


}


export default Post;