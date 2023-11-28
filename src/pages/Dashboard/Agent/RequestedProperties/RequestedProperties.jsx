import { Helmet } from "react-helmet-async"
import Title from "../../../../components/Title/Title"
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import { getRequestedProperty } from "../../../../api/properties";
import WishlistDataRow from "../../../../components/TableDataRow/WishlistDataRow";
import Loader from "../../../../components/Shared/Loader";

const RequestedProperties = () => {


  const { user, loading } = useAuth();
  const {
    data: requestedPropertiesData = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["requestedPropertiesData"],
    queryFn: async () => await getRequestedProperty(),
  });

if(isLoading) return <Loader/>
  return (
    <div className="container mx-auto px-4 sm:px-8">
    <Helmet>
      <title>Requested Properties</title>
    </Helmet>
    <Title name={`Requested Properties`}></Title>
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
                 Offered Price($)
                </th>
                <th scope="col" className="px-6 py-3">
                Status
                </th>
                <th scope="col" className="px-6 py-3">
               Accept
                </th>
                <th scope="col" className="px-6 py-3">
                Reject
                </th>
              </tr>
            </thead>
            <tbody>
            {requestedPropertiesData &&
                requestedPropertiesData?.map((item,idx) => (
                  <WishlistDataRow key={item._id} idx={idx} data={item} refetch={refetch} />
                ))} 
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  )
}

export default RequestedProperties