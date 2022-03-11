import React from 'react';
import { login } from './Util';

 const SignIn = (props) => {
     const handleLogin = () => {
            login();
            props.history.push('/UserAuthentication/dashboard');
        }
    
    return (
        <div className="Sign">
            <h1>Sign in</h1>
            <form>

                <label htmlFor='name'>Name</label>
                <input 
                type='text' 
                id='name' 
                name='name'
                placeholder="Enter Your Name" />
    
                <label htmlFor='email'>E-mail</label>
                <input 
                type='email' 
                id='email' 
                name='email'
                placeholder="Enter Emailn Address" />

                <label htmlFor='password'>password</label>
                <input 
                type='password' 
                id='password' 
                name='password' 
                placeholder="Enter Password"/>

                
                <button onClick={() => handleLogin()}>Submit</button>

            </form>
        </div>
    );
};

export default SignIn;