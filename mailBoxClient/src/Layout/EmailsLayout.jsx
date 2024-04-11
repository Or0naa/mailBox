import { Outlet } from "react-router-dom";
import Menu from "../componnents/Menu";

const EmailsLayout = () => {
  return (
    <div className="emails-layout flex h-screen overflow-hidden">
      <main className="flex">
        <Menu  />
        <Outlet  />
      </main>
    </div>
  );
};

export default EmailsLayout;
