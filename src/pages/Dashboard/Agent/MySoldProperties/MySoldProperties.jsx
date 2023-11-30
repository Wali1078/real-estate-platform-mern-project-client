import { Helmet } from "react-helmet-async"
import Title from "../../../../components/Title/Title"
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getHostBookings } from "../../../../api/bookings";
import SoldPropertyDataRow from "../../../../components/TableDataRow/SoldPropertyDataRow";
import axiosSecure from "../../../../api";

const MySoldProperties = () => {

  const { user, loading } = useAuth();
  const {
    data: soldProperties = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["soldProperties"],
    queryFn: async () => await getHostBookings(user?.email),
  });

//get total sell amount
const {data} = useQuery({
  enabled: !loading && !!user?.email,
  queryKey: ["totalSold"],
  queryFn: async () => await axiosSecure(`/agent-sale/${user?.email}`),
});
console.log(data?.data);

  return (
    <div>
      <Helmet>
      <title>MySold Properties</title>
      </Helmet>
        <Title name={"My Sold Properties"}/>
        {/* calculate total sale */}

        <div className="py-8">
<h1 className="text-center text-2xl font-semibold"> Your Total Sold amount is = ${data?.data} </h1>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
               Property Title
                </th>
                <th scope="col" className="px-6 py-3">
               Property Location
                </th>
                <th scope="col" className="px-6 py-3">
                  Buyer Email
                </th>
                <th scope="col" className="px-6 py-3">
                Buyer Name
                </th>
                <th scope="col" className="px-6 py-3">
                Sold Price
                </th>
                <th scope="col" className="px-6 py-3">
              Buying Date
                </th>
                <th scope="col" className="px-6 py-3">
              Txn Id
                </th>
               
              </tr>
            </thead>
            <tbody>
        {soldProperties &&
          soldProperties?.map((item,idx) => (
                  <SoldPropertyDataRow key={item._id} idx={idx} data={item} refetch={refetch} />
                ))}  
            </tbody>
          </table>
        </div>
      </div>
    </div>
    {soldProperties.length === 0 && <p className="text-center flex items-center text-2xl justify-center h-[50vh]">No Data Available</p>}

    </div>
  )
}

export default MySoldProperties