import React from 'react'

import './sign-in.styles.scss'
import FormInput from "../form-input/form-input.component"
import CustomBtn from "../custom-btn/custom-btn.component"
import {signInWithGoogle, auth} from "../../firebase/firebase.utils"

class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async ev => {
        ev.preventDefault()

        const {
            email,
            password,
        } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({
                email: '',
                password: '',
            })
        } catch (e) {
            console.error(e)
        }

        this.setState({
            email: '',
            password: '',
        })
    }

    handleChange = ev => {
        const {value, name} = ev.target

        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        value={this.state.email}
                        label='email'
                        required
                    />

                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        value={this.state.password}
                        label='password'
                        required
                    />
                    <div className='buttons'>
                        <CustomBtn type='submit'> Sign In </CustomBtn>
                        <CustomBtn
                            onClick={signInWithGoogle}
                            isGoogleSignIn
                        >
                            Sign In With Google
                        </CustomBtn>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
