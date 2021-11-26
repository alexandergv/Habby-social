import React, { Component } from "react";

class Profile extends Component {

    constructor(props) {
        super();
        this.state = {
            userName: '',
            email: ''
        }
        this.checkLogged = this.checkLogged.bind(this);
    }

    componentDidMount() {
        this.checkLogged();
    }

    checkLogged() {
        fetch('API/habby/user/getUser')
            .then(res => res.json())
            .then(x => {
                if (x.auth == false) {
                    this.props.history.push('/');
                }
                else {
                    this.setState({ userName: x.userName, email: x.email })
                }
            })
            .catch(err => console.log(err));



    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <h3>Perfil</h3>
                    <div className="input-field col s12">
                        <input type="text" placeholder={this.state.userName} />
                    </div>
                    <div className="input-field col s12">
                        <input type="text" placeholder={this.state.email} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;