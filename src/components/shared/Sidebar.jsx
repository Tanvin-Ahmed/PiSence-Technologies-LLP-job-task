import PropTypes from "prop-types";
import { TiHomeOutline } from "react-icons/ti";
import { ImBooks } from "react-icons/im";
import { GiCctvCamera } from "react-icons/gi";
import { RiBookletFill } from "react-icons/ri";

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-transparent bg-opacity-50 z-40 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity`}
      onClick={onClose}
    >
      <div className="fixed inset-y-0 left-0 top-[80px] w-64 bg-white text-black shadow h-full p-4 transform translate-x-0 ease-in-out transition-transform">
        <div className="mt-4">
          <a className="py-2 mb-3 flex flex-row space-x-3 items-center cursor-pointer">
            <TiHomeOutline size={30} />
            <span className="text-lg block">Summary Dashboard</span>
          </a>
          <a
            href="#attendance"
            className="py-2 mb-3 flex flex-row space-x-3 items-center cursor-pointer"
          >
            <ImBooks size={30} />
            <span className="text-lg block">Attendance Tracking</span>
          </a>
          <a
            href="#analytics"
            className="py-2 mb-3 flex flex-row space-x-3 items-center cursor-pointer"
          >
            <GiCctvCamera size={30} />
            <span className="text-lg block">Behavioral Analytics</span>
          </a>
          <a className="py-2 mb-3 flex flex-row space-x-3 items-center cursor-pointer">
            <RiBookletFill size={40} />
            <span className="text-lg block">Academic Performance Tracking</span>
          </a>
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Sidebar;
