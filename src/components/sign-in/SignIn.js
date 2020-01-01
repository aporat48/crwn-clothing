import React, { Component } from 'react'
import FormInput from '../form-input/FormInput'
import CustomButton from '../custom-button/CustomButton'
import { signInWithGoogle } from '../../firebase/firebase-util'

import './SignIn.scss'

export class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleSubmit = e => {
    e.preventDefault()
    console.log('submit')
  }
  handleChange = e => {
    const { value, name } = e.target
    this.setState({ email: '', password: '' })
    this.setState({ [name]: value })
    console.log('change')
  }
  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput name='email' type='email' value={this.state.email} label='email' handleChange={this.handleChange} />
          <FormInput name='password' type='password' label='password' value={this.state.password} handleChange={this.handleChange} />
          <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
