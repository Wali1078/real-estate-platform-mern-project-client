import toast from "react-hot-toast";
import { updateProperties } from "../../api/properties"


const ManagePropDataRow = ({idx,data,refetch}) => {
const id = data?._id
const handleStatusChange=async(status) =>{
    // console.log(id);
try {
    const data = await updateProperties(id,status)
console.log(data);
if(data.modifiedCount>0){
    toast.success("Verification status updated")
    refetch()
}

} catch (error) {
    toast.error(error.message)
}
}

  return (
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {idx + 1}
    </th>
    <th
      scope="row"
      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
    >
      {data?.title}
    </th>
    <td className="px-6 py-4">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data?.location}
      </th>
    </td>
    <td className="px-6 py-4">{data?.agentEmail}</td>
    <td className="px-6 py-4">{data?.agentName}</td>
    <td className="px-6 py-4">{data?.priceRangeStart}</td>
    <td className="px-6 py-4 capitalize">{data?.priceRangeEnd}</td>
    <td className="px-6 py-4">
       {!(data?.verificationStatus === "verified") && !(data?.verificationStatus === "rejected") ? <button
          onClick={()=>handleStatusChange("verified")}

          className="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
        >
         Verify
        </button>:<p className="text-center capitalize text-lg ">{data?.verificationStatus}</p>}
      </td>
    <td className="px-6 py-4">
       {!(data?.verificationStatus === "verified") && !(data?.verificationStatus === "rejected") ?<button
          onClick={() => handleStatusChange("rejected")}

          className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
        >
         Reject
        </button>: <p className="text-center capitalize text-lg ">{data?.verificationStatus}</p>}
      </td>
  </tr>
  )
}

export default ManagePropDataRow