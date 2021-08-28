import React, { Component } from 'react'
import { signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.componet';

import './sign-in.styles.scss'

class SignIn extends Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})        
    }

    handleLogInWithGoogle = () => {
        signInWithGoogle();
    }

    render(){
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your e-mail and password.</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        label='E-Mail'
                        required 
                    />
                    <FormInput 
                        name='password' 
                        type='password' 
                        required 
                        handleChange={this.handleChange}
                        label='Password'
                    />               
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton customClass="google-sign-in" onClick={this.handleLogInWithGoogle}>Sign In With Google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

export default SignIn