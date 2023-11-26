import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar/Sidebar";
import { Helmet } from "react-helmet-async";

const DashboardLayout = () => {
  return (
    <>
      <Helmet>
        <title>Dream🏚️ | Dashboard</title>
      </Helmet>

      <div className="relative min-h-screen md:flex">
        {/* Sidebar Component */}
        <Sidebar />
        <div className="flex-1  md:ml-80">
          {/* Outlet for dynamic contents */}
          <div className="p-5 bg-gray-200 dark:bg-zinc-800 min-h-screen dark:text-white">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
