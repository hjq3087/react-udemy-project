import React from 'react'

import FormInput from "../form-input/form-input.component"
import CustomBtn from "../custom-btn/custom-btn.component"

import {auth, createUserProfileDocument} from "../../firebase/firebase.utils"

import './sign-up.styles.scss'

class SignUp extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async ev => {
        ev.preventDefault()

        const {
            displayName,
            email,
            password,
            confirmPassword,
        } = this.state

        if (password !== confirmPassword) {
            const passwordsMismatchMSG = 'passwords don\'t match'
            alert(passwordsMismatchMSG)
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(
                email,
                password
            )

            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })
        } catch (e) {
            console.error(e)
        }
    }

    handleChange = ev => {
        const {name, value} = ev.target
        this.setState({[name]: value})
    }

    render() {
        const {
            displayName,
            email,
            password,
            confirmPassword,
        } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='Display Name'
                        required
                    />
                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='Email'
                        required
                    />
                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='Password'
                        required
                    />
                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='Confirm Password'
                        required
                    />
                    <CustomBtn type='submit'>SIGN UP</CustomBtn>
                </form>
            </div>
        )
    }
}

export default SignUp
