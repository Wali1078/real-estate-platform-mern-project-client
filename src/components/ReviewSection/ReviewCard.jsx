import { RiDeleteBinFill } from "react-icons/ri";
import MyContainer from "../Shared/MyContainer";
import toast from "react-hot-toast";
import { removeReview } from "../../api/review";

const ReviewCard = ({ reviews, idx ,isMyReview,isManageReview,refetch}) => {

const myDate = new Date(reviews?.reviewTime).toLocaleString()
// console.log(myDate);

const handleRemoveReview =async(e)=>{
  e.preventDefault()
  // console.log(reviews._id);
  try {
    const data = await removeReview(reviews._id)
  if(data.deletedCount>0){
    toast.success("Review deleted successfully")
    refetch()
  }
  } catch (error) {
    toast.error(error.message)
  }
}

  return (
    <MyContainer>
      <div className="relative border-b px-8 py-4 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800">
      <p className="text-center text-xl font-bold underline dark:text-white">Review No:{idx+1}</p>
        <div className="text-right">
          <span className="text-sm  font-light text-gray-600 dark:text-gray-400">
            Date : {myDate.split(",")[0]}, Time :
            {myDate.split(",")[1]}
          </span>
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row">
       
        </div>

        <div className="mt-2   ">
          <h1
            
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 "
            
          >
            Property Title : {reviews.title}
          </h1>
          <textarea className="mt-2 w-full border px-4  dark:bg-gray-500 text-gray-600 dark:text-gray-300" defaultValue=  {reviews.review}>
          
          </textarea>
        </div>

        <div className="flex items-center justify-between mt-4">
          <p
         
            className="text-white dark:text-[#1F2937] "
            tabIndex="0"
            role="link"
          >
            Read more
          </p>

          <div className="flex items-center">
            <img
              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
              src={reviews.userImg}
              alt="avatar"
            />
            <p
              className="font-bold text-gray-700  dark:text-gray-200"
             
            >
              {reviews.userName}
            </p>
          </div>
        </div>
    { isMyReview && <button onClick={handleRemoveReview} className="absolute top-0 right-0 border bg-red-700 border-red-700 p-2 text-red-700 rounded-lg"><RiDeleteBinFill className="text-white"/></button>}
    { isManageReview && <button onClick={handleRemoveReview} className="absolute top-0 right-0 border bg-red-700 border-red-700 p-2 text-red-700 rounded-lg"><RiDeleteBinFill className="text-white"/></button>}
      </div>
    </MyContainer>
  );
};

export default ReviewCard;
