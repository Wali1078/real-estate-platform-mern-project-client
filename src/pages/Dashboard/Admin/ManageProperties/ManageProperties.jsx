import { Helmet } from "react-helmet-async"
import Title from "../../../../components/Title/Title"
import ManagePropDataRow from "../../../../components/TableDataRow/ManagePropDataRow"
import useAuth from "../../../../hooks/useAuth"
import { useQuery } from "@tanstack/react-query"
import { getAllProperties } from "../../../../api/properties"
import Loader from "../../../../components/Shared/Loader"

const ManageProperties = () => {
// const data = useLoaderData()
// console.log(data);

const { user, loading } = useAuth();
const {
  data: data = [],
  isLoading,
  refetch,
} = useQuery({
  enabled: !loading && !!user?.email,
  queryKey: ["requestedPropertiesData"],
  queryFn: async () => await getAllProperties(),
});

if(isLoading) return <Loader/>
  return (
    <div>
<Helmet>
  <title>Manage Properties</title>
</Helmet>
<Title name={`Manage Properties`}/>
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
                  Agent Email
                </th>
                <th scope="col" className="px-6 py-3">
                Agent Name
                </th>
                <th scope="col" className="px-6 py-3">
                Price Starts($)
                </th>
                <th scope="col" className="px-6 py-3">
                Price Ends($)
                </th>
                <th scope="col" className="px-6 py-3">
               Verify Button
                </th>
                <th scope="col" className="px-6 py-3">
                Reject Button
                </th>
              </tr>
            </thead>
            <tbody>
        {data &&
                data?.map((item,idx) => (
                  <ManagePropDataRow key={item._id} idx={idx} data={item} refetch={refetch} />
                ))}  
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ManageProperties