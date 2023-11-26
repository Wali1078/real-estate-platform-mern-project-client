import {  GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { MdOutlineHouseSiding } from "react-icons/md";
import { useState } from "react";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
import { Link, useNavigate } from "react-router-dom";
import DarkMode from "../../DarkMode/DarkMode";
import { BiHomeAlt } from "react-icons/bi";
import MenuWrapper from "../MenuWrapper/MenuWrapper";
import UserMenu from "../DashboardMenu/UserMenu";
import AgentMenu from "../DashboardMenu/AgentMenu";
import AdminMenu from "../DashboardMenu/AdminMenu";

const Sidebar = () => {
  const { user, logOut } = useAuth();
  const [role] = useRole();
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div>
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div className="">
          <div className="block cursor-pointer p-4 font-bold">
            {/* logo */}
            <Link to={`/`} className="flex text-3xl">
              Dream <MdOutlineHouseSiding size={40} />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-blue-200 dark:bg-zinc-400 w-80 space-y-6  py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full flex px-4 py-2 shadow-lg  justify-center items-center bg-blue-400 dark:bg-zinc-300 mx-auto">
              {/* toggle logo */}
              <Link to={`/`} className="flex text-3xl">
                Dream <MdOutlineHouseSiding size={40} />
              </Link>
            </div>
            <div className="flex items-center justify-center">
              <p className="text-xl font-semibold my-4 pl-2">Change Theme </p>
              <span className="">
                <DarkMode />
              </span>
            </div>
            <hr />
            <div>
              <p className="text-2xl font-semibold mt-4 pl-2 text-center text-blue-900">
                {user?.displayName}
              </p>
              <p className="text-center text-lg mb-4 animate-bounce capitalize">
                ({role})
              </p>
            </div>
          </div>
          <hr />
          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 space-y-4 px-4">
            <MenuWrapper
              icon={CgProfile}
              label={`My Profile`}
              address={`/dashboard`}
            ></MenuWrapper>
            {/* if user is a guest */}
            {role === "user" && <UserMenu />}
            {/* if user is a host */}
            {role === "agent" && <AgentMenu />}
            {/* if user is a admin */}
            {role === "admin" && <AdminMenu />}
          </div>
        </div>

        <div className="flex  items-center justify-center w-full">
          <hr />
         
          <button
            onClick={() => navigate("/")}
            className="flex w-full items-center  px-4 py-2 mt-5 text-lg rounded-lg hover:bg-white dark:hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <BiHomeAlt className="w-5 h-5" />
            <span className="mx-4 font-medium">Home</span>
          </button>

          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 rounded-lg text-lg hover:bg-white dark:hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
