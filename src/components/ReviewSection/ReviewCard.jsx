
import MyContainer from "../Shared/MyContainer";

const ReviewCard = ({ reviews, idx }) => {
  return (
    <MyContainer>
      <div className="border-b px-8 py-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <div className="text-right">
          <span className="text-sm  font-light text-gray-600 dark:text-gray-400">
            Date : {reviews.reviewTime.split("T")[0]}, Time :{" "}
            {reviews.reviewTime.split("T")[1].slice(0, 8)}
          </span>
        </div>
        <div className="flex items-center justify-between flex-col md:flex-row">
       
        </div>

        <div className="mt-2   ">
          <h1
            
            className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 "
            
          >
            {reviews.title}
          </h1>
          <textarea className="mt-2 w-full border px-4  dark:bg-gray-500 text-gray-600 dark:text-gray-300" defaultValue=  {reviews.review}>
          
          </textarea>
        </div>

        <div className="flex items-center justify-between mt-4">
          <a
            href="#"
            className="text-blue-600 dark:text-blue-400 hover:underline"
            tabIndex="0"
            role="link"
          >
            Read more
          </a>

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
      </div>
    </MyContainer>
  );
};

export default ReviewCard;
