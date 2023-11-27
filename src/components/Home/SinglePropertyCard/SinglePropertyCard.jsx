import toast from "react-hot-toast";
import { addToWishList } from "../../../api/properties";

const SinglePropertyCard = ({ property }) => {
  const {
    _id,
    title,
    image,
    location,
    priceRangeStart,
    priceRangeEnd,
    verificationStatus,
    agentName,
    agentImg,
    desc,
  } = property || {};

  const wishlistData = {
    oldId : _id,
    title,
    image,
    location,
    priceRangeStart,
    priceRangeEnd,
    verificationStatus,
    agentName,
    agentImg,
    desc,
  }
const handleAddToWishlist =async(e,_id)=>{
    e.preventDefault();
    try {
       const data = await addToWishList(wishlistData)
       if(data.insertedId){
        toast.success("Wishlist property Successful")
       }else{
        toast("Already Wishlisted")
       }
    } catch (error) {
        toast.error(error.message)
    }
}

  return (
    <div>
      <div className="mt-4  rounded-t-xl bg-gray-100 shadow-2xl dark:bg-gray-900">
        <div className="text-sm font-medium text-gray-400">
          <img className="w-full h-[70vh] rounded-t-lg" src={image && image} />
        </div>
        <div className="relative flex w-full items-center self-center overflow-hidden px-5 py-5 text-gray-600 focus-within:text-gray-400">
          <img
            className="mr-2 h-12 w-12 cursor-pointer rounded-full border-2 border-rose-400 object-cover shadow "
            alt="User avatar"
            src={agentImg && agentImg}
          />
         <div className="flex flex-col">
         <span className="text-lg font-bold text-gray-700 dark:text-white"> Agent : {agentName}</span>
          
          <span className="text-base font-semibold"><span className="hidden md:block"> Location : </span>{location}</span>
         </div>
         <p className="absolute right-24 text-xl dark:text-blue-500 font-bold hidden md:block">Add to WishList</p>
          <span onClick={(e)=>handleAddToWishlist(e,_id)} className="absolute right-6 flex h-10 w-10 md:h-14 md:w-14 cursor-pointer items-center rounded-full bg-blue-500/40 p-1 text-blue-400 backdrop-blur-md transition duration-300 ease-out hover:bg-green-500 hover:text-white hover:shadow-lg hover:shadow-green-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-12 w-12"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
            </svg>
          </span>
        </div>
      </div>
      <div>
        <div className="flex  flex-col rounded-b-xl border bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900 dark:shadow-slate-700/[.7]">
          <div className="p-4 md:p-5">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white">
           Title : {title}
            </h3>
            <p className="mt-2 text-gray-800 dark:text-gray-400 ">
             {desc}
            </p>
            <p className="mt-3 inline-flex items-center gap-2 text-lg font-medium text-blue-500 hover:text-rose-700">
             Offer Price Between: ${priceRangeStart} to ${priceRangeEnd}
             
            </p>
          </div>
          <div className="rounded-b-xl border-t bg-gray-100 py-3 px-4 dark:border-gray-700 dark:bg-gray-800 md:py-4 md:px-5">
            <p className="mt-1 text-md text-gray-500 dark:text-gray-500">
              Verification Status : <span className="text-green-400">{verificationStatus} </span>
              by Admin
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyCard;
