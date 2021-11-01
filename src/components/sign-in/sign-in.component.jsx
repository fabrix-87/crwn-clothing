import React, { Component } from 'react'
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.componet';

import './sign-in.styles.scss'
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import { connect } from 'react-redux';

class SignIn extends Component{
    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {emailSignInStart} = this.props;
        const { email, password} = this.state;

        emailSignInStart(email, password)
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})        
    }

    render(){
        const {googleSignInStart} = this.props;
        
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
                        value={this.state.password} 
                        required 
                        handleChange={this.handleChange}
                        label='Password'
                    />               
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton 
                            customClass="google-sign-in" 
                            onClick={googleSignInStart} 
                            type="button">Sign In With Google</CustomButton>
                    </div>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({email, password}))
  })

export default connect(null, mapDispatchToProps)(SignIn)