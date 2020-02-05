import React, { useState } from "react";
import { connect } from "react-redux";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/user/user.action";

const SignUp = ({ signUpStart }) => {
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = formData;

  const handleSubmit = async event => {
    event.preventDefault();
    signUpStart({ displayName, email, password, confirmPassword });
  };

  const onChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={event => handleSubmit(event)}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={event => onChange(event)}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={event => onChange(event)}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={event => onChange(event)}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={event => onChange(event)}
          label='Confirm Password'
          required
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

export default connect(null, { signUpStart })(SignUp);
