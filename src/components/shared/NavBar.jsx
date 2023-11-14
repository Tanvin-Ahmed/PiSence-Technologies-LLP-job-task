import { useState } from "react";
import Sidebar from "./Sidebar";
import avatar from "../../assets/avatar.png";
import { BiMenuAltLeft } from "react-icons/bi";

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="sticky inset-x-0 top-0 z-50 flex items-center justify-between p-4 bg-[#5e7050]">
      <div className="flex items-center">
        <button className="text-2xl" onClick={toggleSidebar}>
          <BiMenuAltLeft
            size={48}
            color={isSidebarOpen ? "black" : "#bfaaaa"}
          />
        </button>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <img
            className="rounded-full h-10 w-10 object-cover"
            src={avatar}
            alt="User Avatar"
          />
        </div>
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </nav>
  );
};

export default Navbar;
