import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import TermsOfUse from '../pages/TermsOfUse';
import Settings from '../pages/Settings';
import AuthLayout from './AuthLayout';

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<AuthLayout><Login /></AuthLayout>} />
      <Route path="register" element={<AuthLayout><Register /></AuthLayout>} />
      <Route path="terms" element={<AuthLayout><TermsOfUse /></AuthLayout>} />
      <Route path="settings" element={<AuthLayout><Settings /></AuthLayout>} />
    </Routes>
  );
};

export default AuthRoutes;