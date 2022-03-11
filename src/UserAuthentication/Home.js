import React, { Component } from 'react';
import { logout, isLogin } from './Util';
import { Link } from 'react-router-dom';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLogin: isLogin()
        }
    }

    handleLogout = () => {
        logout();
        this.setState({
            isLogin: false
        })
    }

    render() {
        return (
            <div className="title">
                <h1>Home</h1>
                <p>first home page</p>
            
                {this.state.isLogin ? 
                <button onClick={() => this.handleLogout()}>Logout</button> 
                 : <Link to="/UserAuthentication/signin">Go to sign in page</Link>
                }
            </div>
        );
    }
}

export default Home;