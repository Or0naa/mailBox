import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

export default function Register() {
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
  };

  return (
    <div className="bg-amber-100-300 flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-5xl font-bold mb-8">Your first MailBox is here</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="mb-4 relative">
          <div className="flex gap-2">
            <label htmlFor="firstName" className="block mb-1">First Name</label>
            <span className="text-red-600">*</span>
          </div>
          <input type="text" id="firstName" className="border border-gray-400 p-2 rounded-md pl-8" />
        </div>
        <div className="mb-4 relative">
          <div className="flex gap-2">
            <label htmlFor="lastName" className="block mb-1">Last Name</label>
            <span className="text-red-600">*</span>
          </div>
          <input type="text" id="lastName" className="border border-gray-400 p-2 rounded-md pl-8" />
        </div>
        <div className="mb-4 relative">
          <div className="flex gap-2">
            <label htmlFor="password" className="block mb-1">Password</label>
            <span className="text-red-600">*</span>
          </div>
          <input type="password" id="password" className="border border-gray-400 p-2 rounded-md pl-8" />
        </div>
        <div className="mb-4 relative">
          <div className="flex gap-2">
            <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
            <span className="text-red-600">*</span>
          </div>
          <input type="password" id="confirmPassword" className="border border-gray-400 p-2 rounded-md pl-8" />
        </div>
        <div className="mb-4 relative">
          <div className="flex gap-2">
            <label htmlFor="email" className="block mb-1">Email Address</label>
            <span className="text-red-600">*</span>
          </div>
          <input type="email" id="email" className="border border-gray-400 p-2 rounded-md pl-8" />
        </div>
        <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md mb-4">Register</button>
      </form>
      <p className="mb-4">Already have an account? <span className="text-teal-500 cursor-pointer" onClick={() => nav('/login')}>Login Here</span></p>
      <p className="text-sm text-gray-600">By registering, you agree to our  <span className="text-teal-500 cursor-pointer" onClick={() => nav('/terms')}>Terms of use.</span></p>
    </div>
  );
}
