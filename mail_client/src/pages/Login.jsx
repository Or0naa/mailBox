import React from 'react';
import { useNavigate } from 'react-router-dom';
import Form from '../functions/Form';

export default function Login() {
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      email: e.target.email.value,
      password: e.target.password.value
    };
    console.log('Form submitted:', details);
    // כאן ניתן לשלוח את המידע לקומפוננטה הגנרית, למשל כתובת משתמש או אימייל
    nav('/');
  };

  return (
    <div className='flex flex-col items-center h-screen w-screen p-20'>
    <Form
      data={{
        title: 'Welcome To MailBox',
        submitText: 'Login',
        registerText: "Don't have an account?",
        inputs: [
          { id: 'email', label: 'Email', type: 'email', required: true },
          { id: 'password', label: 'Password', type: 'password', required: true }
        ],
        navTo:"Register Hear",
        buttonSide: "forgat password"
      }}
      onSubmit={handleSubmit}
      onForgetPassword={() => console.log('Forget password')}
      onRegister={() => nav('/register')}
    /></div>
  );
}
