import React from 'react';
import SignIn from '../../components/signIn/signIn.component';
import SignUp from '../../components/sign-up/signUp.component';
import './signInUp.style.scss';

const SignInSignUp = () => (
    <div className="signInUp">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInSignUp;