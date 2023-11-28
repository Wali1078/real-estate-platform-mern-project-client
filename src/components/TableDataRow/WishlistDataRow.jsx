import toast from "react-hot-toast";
import { changeWishlistStatus } from "../../api/properties";
import { useState } from "react";

const WishlistDataRow = ({ data, idx, refetch }) => {
  console.log(data);


const handleAccept =async(e,id)=>{
    e.preventDefault()
    console.log(id);
try {
    const response = await changeWishlistStatus(id)
console.log(response);

if(response.modifiedCount >0){
    toast.success("Offer Accepted")
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
      <td className="px-6 py-4">{data?.userEmail}</td>
      <td className="px-6 py-4">{data?.userName}</td>
      <td className="px-6 py-4">{data?.offerPrice}</td>
      <td className="px-6 py-4 capitalize">{data?.status}</td>
      <td className="px-6 py-4">
       {data?.status==="pending" ? <button onClick={(e)=>handleAccept(e,data?._id)} className={`text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900 `} >
          Accept
        </button> :
        
        <div className="cursor-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border">Accept</div>
        }
      </td>
      <td className="px-6 py-4">
        <button className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
          Reject
        </button>
      </td>
    </tr>
  );
};

export default WishlistDataRow;
