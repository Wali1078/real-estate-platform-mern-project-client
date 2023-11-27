import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import useRole from "../../../../hooks/useRole";
import toDate from "date-fns/toDate";

const MyProfile = () => {
  const { user } = useAuth();
  const [role] = useRole();
  const lastLogin = user?.metadata?.lastSignInTime;
  // const time = toDate(1700920501912)
  // console.log(time);
  const local = new Date(lastLogin).toLocaleDateString();
  const time = new Date(lastLogin).toLocaleString();
  // console.log(local, time);
  return (
    <div>
      <Helmet>
        <title>Dream🏚️ | Profile</title>
      </Helmet>
      <div className="bg-white my-12 pb-6 w-full justify-center items-center overflow-hidden max-w-lg rounded-lg shadow-xl mx-auto ">
        <div className="relative h-40 bg-[#60A5FA]">
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          "
          >
            <button className="m-1 capitalize rounded-md bg-gradient-to-bl from-green-400 via-green-400 to-green-600 p-2 pl-5 pr-5  text-white text-xl font-bold shadow-lg shadow-green-500/40 hover:via-green-500 hover:to-green-600 active:via-green-600 active:to-green-700">
              {role ? role : ""} ✅
            </button>
          </div>
        </div>
        <div className="relative shadow mx-auto h-24 w-24 -my-12 border-white rounded-full overflow-hidden border-4">
          <img className="object-cover w-full h-full" src={user?.photoURL} />
        </div>
        <div className="mt-16 ">
          <h1 className="text-2xl text-center font-semibold dark:text-black">
            {user?.displayName}
          </h1>
          <p className="text-lg text-gray-500 text-center ">{user?.email}</p>
          <h3 className="text-center dark:text-black mt-2">
            Last Login : {(local, time)}
          </h3>
        </div>
        {/* <h3>Registration Date : {time}</h3> */}
        <div className="flex flex-col mt-8 px-4 space-y-4">
          <button className="rounded-md  border-2 border-slate-400 px-5 py-2 text-sm font-medium text-slate-400 shadow-md transition duration-150 ease-in-out hover:bg-slate-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600">
            Update Profile
          </button>
          <button className="rounded-md  border-2 border-slate-400 px-5 py-2 text-sm font-medium text-slate-400 shadow-md transition duration-150 ease-in-out hover:bg-slate-400 hover:text-white hover:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-600">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
