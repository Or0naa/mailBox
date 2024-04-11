import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TermsOfUse from "../pages/TermsOfUse";
import Settings from "../pages/Settings";


const AuthLayout = ({ children }) => {
  return (
    <div className="auth-layout">

      <main>{children}</main>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path="terms" element={<TermsOfUse/>}/>
        <Route path='settings' element={<Settings/>} />
      </Routes>
    </div>
  );
};

export default AuthLayout;
