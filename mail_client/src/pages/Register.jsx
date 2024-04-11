import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../functions/Form';

export default function Register() {
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      password: e.target.password.value,
      confirmPassword: e.target.confirmPassword.value,
      email: e.target.email.value
    };
    // כאן נשלח את המידע לקומפוננטה הגנרית
    console.log('Form submitted:', details);
  };

  return (
    <div className='flex flex-col items-center h-screen w-screen p-20'>
    <Form
      data={{
        title: 'Your first MailBox is here',
        submitText: 'Register',
        registerText: 'Already have an account?',
        inputs: [
          { id: 'firstName', label: 'First Name', type: 'text', required: true },
          { id: 'lastName', label: 'Last Name', type: 'text', required: true },
          { id: 'password', label: 'Password', type: 'password', required: true },
          { id: 'confirmPassword', label: 'Confirm Password', type: 'password', required: true },
          { id: 'email', label: 'Email Address', type: 'email', required: true }
        ],
        navTo:"Login Here",
        buttonSide: "terms of use"

      }}
      onSubmit={handleSubmit}
      onForgetPassword={() => console.log('Forget password')}
      onRegister={() => nav('/login')}
    />
    </div>
  );
}
