import React, {useState} from 'react';
import Cookies from 'universal-cookie';
import axios from 'axios';

import signinImage from '../assets/signup.jpg';

const initialState = {
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}

const Auth = () => {

    const [form, setForm] = useState(initialState);
    const [isSignup, setIsSignup] = useState(true);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    }

  return (
    <div className='auth__form-container'>
        <div className='auth__form-container_fields'>
            <div className="auth__form-container_fields-content">
                <p>{isSignup ? 'Sign Up' : 'Sign In'}</p>
                <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='fullName'>Full Name</label>
                            <input 
                                type="text" 
                                name='fullName'
                                onChange={handleChange}
                                placeholder='Full Name'
                                required
                            />
                        </div>
                    )}
                     <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='userName'>Username</label>
                            <input 
                                type="text" 
                                name='userName'
                                onChange={handleChange}
                                placeholder='Username'
                                required
                            />
                    </div>
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='phoneNumber'>Phone Number</label>
                            <input 
                                type="text" 
                                name='phoneNumber'
                                onChange={handleChange}
                                placeholder='Phone Number'
                                required
                            />
                        </div>
                    )}
                    {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='avatarURL'>Avatar URL</label>
                            <input 
                                type="text" 
                                name='avatarURL'
                                onChange={handleChange}
                                placeholder='Avatar URL'
                                required
                            />
                        </div>
                    )}
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='password'>Password</label>
                            <input 
                                type="password" 
                                name='password'
                                onChange={handleChange}
                                placeholder='Password'
                                required
                            />
                        </div>
                        {isSignup && (
                        <div className='auth__form-container_fields-content_input'>
                            <label htmlFor='confirmPassword'>Confirm Password</label>
                            <input 
                                type="password" 
                                name='confirmPassword'
                                onChange={handleChange}
                                placeholder='Confirm Password'
                                required
                            />
                        </div>
                        )}
                        <div className='auth__form-container_fields-content_button'>
                            <button>{isSignup ? "Sign Up" : "Sign In"}</button>
                        </div>
                </form>
                <div className='auth__form-container_fields-account'>
                    <p>
                        {isSignup
                            ? 'Already have an account?'
                            : "Don't have an account?"
                        }
                        <span onClick={switchMode}>
                            {isSignup ? 'Sign In' : 'Sign up'}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        //TODO: CHANGE THIS BANNER IMAGE AND STYLING
        <div className='auth__form-container_image'>
            <img src={signinImage} alt="sign in" />
        </div>
    </div>
  )
}

export default Auth;