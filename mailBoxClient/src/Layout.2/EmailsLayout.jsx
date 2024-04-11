import { Outlet } from 'react-router-dom';

const EmailsLayout = () => {
  return (
    <div className="emails-layout flex w-full h-screen overflow-hidden">
      <Outlet />
    </div>
  );
};

export default EmailsLayout;