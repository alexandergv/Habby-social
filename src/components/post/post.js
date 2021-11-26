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
}

componentDidMount()
{
 console.log(this.props)
}


render()
{
    return(
        <div>
            <h3></h3>
        </div>

    )
}


}


export default Post;