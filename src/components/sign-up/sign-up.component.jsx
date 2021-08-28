import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.componet'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'
import { createUserWithEmailAndPassword } from 'firebase/auth'

class SignUp extends Component{
    constructor(){
        super();

        this.state = {
            displayName: 'Fabrizio',
            email: '',
            password: '101187',
            confirmPassword: '101187'
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword){
            alert('Le due password non coincidono');
            return;
        }

        createUserWithEmailAndPassword( auth, email, password)            
            .then((userCredential) => {
                createUserProfileDocument(userCredential.user, {displayName});

                this.state = {
                    displayName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }
            })
            .catch((error) => {         
                console.log('error :' + error.message);
            })         
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})        
    }

    render(){

        const {displayName, email, password, confirmPassword} = this.state;

        return(
            <div className='sign-up'>
                <h2 className='title'>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        handleChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        handleChange={this.handleChange}
                        label='E-Mail'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        handleChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomButton type='submit'>SIGN UP</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;