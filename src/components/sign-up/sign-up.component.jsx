import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.componet'

import './sign-up.styles.scss'

import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'

class SignUp extends Component{
    constructor(){
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        const {signUpStart} = this.props;

        if(password !== confirmPassword){
            alert('Le due password non coincidono');
            return;
        }

        signUpStart(email, password, displayName);       
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

const mapDispatchToState = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(
        signUpStart({email,password, displayName})
    )
})

export default connect(null,mapDispatchToState)(SignUp);