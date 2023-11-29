import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../../../api/auth";
import { Helmet } from "react-helmet-async";
import UserDataRow from "../../../../components/TableDataRow/UserDataRow";
import Title from "../../../../components/Title/Title";
import Loader from "../../../../components/Shared/Loader";
import useUsers from "../../../../hooks/useUsers";

const ManageUsers = () => {
 /*  const { data: users = [],isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => await getAllUsers(),
  }); */

const [users, isLoading,refetch]=useUsers()

if(isLoading) return <Loader/>
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <Helmet>
        <title>Manage Users</title>
      </Helmet>
      <Title name={`Manage Users`}></Title>
      <div className="py-8">
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    #
                  </th>
                  <th scope="col" className="px-6 py-3">
                    User Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    User Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Current Status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Make Admin
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Make Agent
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Mark as Fraud
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Delete User
                  </th>
                </tr>
              </thead>
              <tbody>
                {users &&
                  users.map((user,idx) => (
                    <UserDataRow key={user._id} idx={idx} user={user} refetch={refetch} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
