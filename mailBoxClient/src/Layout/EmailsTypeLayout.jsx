import { Outlet } from "react-router-dom";
import Menu from "../componnents/Menu";

const EmailsTypeLayout = () => {
  return (
    <div className="overflow emails-type-layout flex w-full">
      <Outlet />
    </div>
  );
};

export default EmailsTypeLayout;