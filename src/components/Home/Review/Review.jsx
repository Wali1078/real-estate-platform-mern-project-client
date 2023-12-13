import Title from "../../Title/Title";
import { BiSolidQuoteLeft } from "react-icons/bi";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useQuery } from "@tanstack/react-query";
import { getAllReviews } from "../../../api/review";
import MyContainer from "../../Shared/MyContainer";


const Review = () => {
  const {
    data= [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["homeReviews"],
    queryFn: async () => await getAllReviews(),
  });
  // console.log(data);

  // const myDate = new Date(data?.reviewTime).toLocaleString()
  // console.log(myDate);
const date =[]
data?.map(item=>date.push(item.reviewTime))
// console.log(date);
const dateObjects = date.map((timestamp) => new Date(timestamp));
// console.log(dateObjects);
// Sort the Date objects in descending order
dateObjects.sort((a, b) => b - a);

// Convert sorted Date objects back to formatted strings
const sortedTimestamps = dateObjects.map((date) => date.toISOString());

const firstFiveSortedData = sortedTimestamps.slice(0,5)


 const sortedData = data?.filter(item=>firstFiveSortedData.includes(item.reviewTime))
//  console.log(sortedData);


  return (
    <div className="">
     <Title name={`Review`}/>
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
     {sortedData?.slice().reverse().map((review) => (
          <SwiperSlide key={review._id}>
            <MyContainer>
            <div className="flex flex-col items-center mx-24 my-16 ">
              <BiSolidQuoteLeft size={80} className="dark:text-white"/>
              <p className="py-8 text-4xl overflow-hidden max-w-sm md:max-w-md lg:max-w-lg dark:text-white">Property Title:{review.title}</p>
              <h3 className="text-2xl  overflow-hidden max-w-sm md:max-w-md lg:max-w-lg text-blue-400">{review.review}</h3>
             

              <div className="flex items-center mt-4">
            <img
              className="hidden object-cover w-16 h-16 mx-4 rounded-full sm:block"
              src={review.userImg}
              alt="avatar"
            />
            <p
              className="font-bold text-gray-700 capitalize dark:text-gray-200"
             
            >
         {review.userName} <br />
             Date : {review.reviewTime.split('T')[0]} <br/> 
             Time : {new Date(review?.reviewTime).toLocaleString().split(",")[1]}
            </p>
          
          </div>
          <br />
            <p
              className="font-bold text-gray-700  dark:text-gray-200"
             
            >
             
            </p>

            </div>
            </MyContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
