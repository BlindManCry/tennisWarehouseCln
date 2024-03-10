import { Outlet } from "react-router-dom";
import Header from "./ui/Header/Header";
import Sidebar from "./ui/Sidebar/Sidebar";

function AppLayout() {
  return (
    <div>
      <Header />
      <div className="flex w-[90%] m-auto">
        <div className="w-[15%]">
          <Sidebar />
        </div>
        <div className="w-[85%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
