import React, { useState } from "react";
import PropTypes from "prop-types";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.scss";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const { email, password } = formData;

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      await auth.signInWithEmailAndPassword(email, password);

      setFormData({
        email: "",
        password: ""
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={event => handleSubmit(event)}>
        <FormInput
          name='email'
          value={email}
          required
          label='email'
          onChange={e => onChange(e)}
        />
        <FormInput
          name='password'
          value={password}
          required
          label='password'
          onChange={e => onChange(e)}
        />
        <div className='buttons'>
          <CustomButton type='submit' value='Submit Form'>
            Sign In
          </CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

SignIn.propTypes = {};

export default SignIn;
