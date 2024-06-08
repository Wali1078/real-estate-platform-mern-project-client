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
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["homeReviews"],
    queryFn: async () => await getAllReviews(),
  });

  // Ensure data is treated as an array
  const reviews = Array.isArray(data) ? data : [];

  // Transform and sort review dates
  const dateObjects = reviews.map(review => new Date(review.reviewTime));
  dateObjects.sort((a, b) => b - a);
  const sortedTimestamps = dateObjects.map(date => date.toISOString());
  const firstFiveSortedData = sortedTimestamps.slice(0, 5);
  const sortedData = reviews.filter(review => firstFiveSortedData.includes(review.reviewTime));

  if (isLoading) {
    return <div>Loading...</div>; // Or any other loading component you have
  }

  return (
    <div>
      <Title name={`Review`} />
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
        {sortedData.slice().reverse().map((review) => (
          <SwiperSlide key={review._id}>
            <MyContainer>
              <div className="flex flex-col items-center mx-24 my-16 ">
                <BiSolidQuoteLeft size={80} className="dark:text-white"/>
                <p className="py-8 text-4xl overflow-hidden max-w-sm md:max-w-md lg:max-w-lg dark:text-white">
                  Property Title:{review.title}
                </p>
                <h3 className="text-2xl overflow-hidden max-w-sm md:max-w-md lg:max-w-lg text-blue-400">
                  {review.review}
                </h3>
                <div className="flex items-center mt-4">
                  <img
                    className="hidden object-cover w-16 h-16 mx-4 rounded-full sm:block"
                    src={review.userImg}
                    alt="avatar"
                  />
                  <p className="font-bold text-gray-700 capitalize dark:text-gray-200">
                    {review.userName} <br />
                    Date : {review.reviewTime.split('T')[0]} <br />
                    Time : {new Date(review?.reviewTime).toLocaleString().split(",")[1]}
                  </p>
                </div>
              </div>
            </MyContainer>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;