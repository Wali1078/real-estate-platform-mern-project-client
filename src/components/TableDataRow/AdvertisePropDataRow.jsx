import { RiDeleteBin6Fill } from "react-icons/ri";
import axiosSecure from "../../api";
import { updatePropertyForAds } from "../../api/properties";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const AdvertisePropDataRow = ({ prop, refetch, idx, totalAds }) => {
  console.log(totalAds);

  const handleAddProp = async (ads) => {
    if (totalAds < 15) {
      try {
        const data = await updatePropertyForAds(prop._id, { adv: ads });
        // console.log(data);
        if (data.modifiedCount > 0) {
          toast.success(` ${ads} successfully`);
          refetch();
        }
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      toast.error("Sorry !! You will adv max 6 properties only");
    }
  };
  const handleRemoveProp = async (ads) => {
    try {
      const data = await updatePropertyForAds(prop._id, { adv: ads });
      // console.log(data);
      if (data.modifiedCount > 0) {
        toast.success(` ${ads} successfully`);
        refetch();
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

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
        <img className="w-[100px] h-[100px]" src={prop?.image} alt="" />
      </th>
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {prop?.title}
      </th>
      <th
        scope="row"
        className="capitalize px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {prop?.priceRangeStart}
      </th>
      <th
        scope="row"
        className="capitalize px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {prop?.priceRangeEnd}
      </th>
      <th
        scope="row"
        className="capitalize px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {prop?.agentName}
      </th>
      {prop?.adv === "removeAds" ? (
        <th
          scope="row"
          className="capitalize px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <button
            onClick={() => handleAddProp("addAds")}
            className="text-green-700 hover:text-white border border-green-700 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-900"
          >
            ✔️
          </button>
        </th>
      ) : (
        <th
          scope="row"
          className="capitalize px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <button className="cursor-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border">
           X
          </button>
        </th>
      )}
      {prop?.adv === "addAds" ? (
        <th
          scope="row"
          className="capitalize px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <button
            onClick={() => handleRemoveProp("removeAds")}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            <MdDelete size={20}/>
          </button>
        </th>
      ) : (
        <th
          scope="row"
          className="capitalize px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <button className="cursor-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 border">
            X
          </button>
        </th>
      )}
    
    </tr>
  );
};

export default AdvertisePropDataRow;
