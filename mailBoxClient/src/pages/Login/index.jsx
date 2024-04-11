import { useNavigate } from 'react-router-dom';
import styles from './style.module.css';

export default function Login() {
  const nav = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    console.log('Form submitted:', details);
    nav('/');
  };

  return (
    <div className="bg-amber-100-300 flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-5xl font-bold mb-8">Welcome To MailBox</h1>
      <form className="flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <div className='flex gap-2'>
            <label htmlFor="email" className="block mb-1">Email</label>
            <span className=" text-red-600">*</span></div>
          <input type="email" id="email" className="border border-gray-400 p-2 rounded-md pl-8" />
        </div>
        <div className="mb-4">
          <div className='flex gap-2'>
            <label htmlFor="password" className="block mb-1">Password</label>
            <span className=" text-red-600">*</span></div>
          <input type="password" id="password" className="border border-gray-400 p-2 rounded-md" />
        </div>
        <div className="mb-4">
          <input type="checkbox" id="remember" className="mr-2" />
          <label htmlFor="remember">Remember me</label>
        </div>
        <div className="flex justify-between w-full mb-6">
          <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-md">Login</button>
          <button onClick={() => console.log("Forget password")} className="text-teal-500">Forget password</button>
        </div>
      </form>
      <div className="flex justify-center items-center w-full">
        <p className="mr-2">Don't have an account?</p>
        <button onClick={() => nav('/register')} className="text-teal-500">Register Here</button>
      </div>
    </div>
  );
}
