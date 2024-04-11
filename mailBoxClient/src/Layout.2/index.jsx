import { Outlet, Route, Routes } from 'react-router-dom';
import EmailsRoutes from './EmailsRoutes';
import AuthRoutes from './AuthRoutes';
import Sidebar from '../components/Sidebar';

export default function Layout() {
  return (
    <div className="overflow-hidden">
      <Routes>
        <Route path="/*" element={
          <div className="flex w-full">
            <Sidebar />
            <Outlet />
          </div>
        } >
          <Route path="" element={<div>Home</div>} />
          <Route path="calendar" element={<Calendar />} />
          <Route path="emails/*" element={<EmailsRoutes />} />
        </Route>
        <Route path="/auth/*" element={<AuthRoutes />} />
      </Routes>
    </div>
  );
}