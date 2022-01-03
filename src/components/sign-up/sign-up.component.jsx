import React, { useState } from 'react'
import CustomButton from '../custom-button/custom-button.component'
import FormInput from '../form-input/form-input.componet'

import './sign-up.styles.scss'

import { connect } from 'react-redux'
import { signUpStart } from '../../redux/user/user.actions'

const SignUp = ({signUpStart}) =>{
    const [userDatas, setDatas] = useState({displayName: '', email: '', password: '', confirmPassword: ''});
    const {displayName, email, password, confirmPassword} = userDatas;
    
    const handleSubmit = async event => {
        event.preventDefault();

        if(password !== confirmPassword){
            alert('Le due password non coincidono');
            return;
        }

        signUpStart(email, password, displayName);       
    }

    const handleChange = event => {
        const {value, name} = event.target;
        setDatas({...userDatas, [name]: value})        
    }

    return(
        <div className='sign-up'>
            <h2 className='title'>I do not have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={handleChange}
                    label='Display Name'
                    required
                />
                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    handleChange={handleChange}
                    label='E-Mail'
                    required
                />
                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    handleChange={handleChange}
                    label='Password'
                    required
                />
                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={handleChange}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    );
}

const mapDispatchToState = dispatch => ({
    signUpStart: (email, password, displayName) => dispatch(
        signUpStart({email,password, displayName})
    )
})

export default connect(null,mapDispatchToState)(SignUp);