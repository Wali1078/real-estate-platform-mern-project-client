import { Helmet } from "react-helmet-async";
import MyContainer from "../../components/Shared/MyContainer";
import Title from "../../components/Title/Title";
import Loader from "../../components/Shared/Loader";
import useProperties from "../../hooks/useProperties";
import AdvertisementCard from "../../components/Home/AdvertisementCard/AdvertisementCard";
import Banner from "../../components/Shared/Banner";
import Footer from "../../components/Home/Footer/Footer";
import { useState } from "react";

const AllProperty = () => {

  const [properties, isLoading] = useProperties();
  const removeFraud = properties?.filter(prop=>prop.role!=="fraud")
  const removeRejectedProperties = removeFraud?.filter(prop=>prop.verificationStatus==="verified");

const [filteredData, setFilteredData] = useState();

  const handleSearch = (e) => {
    e.preventDefault();
  const searchData = e.target.searchBox.value.toLowerCase()
  // console.log(searchData);
  const filteredData = removeRejectedProperties?.filter(prop=>prop.title.toLowerCase().includes(searchData))
  setFilteredData(filteredData)
  };
// console.log(filteredData);
  if (isLoading) return <Loader />;
  return (
    <MyContainer>
      <Helmet>
        <title>Dream🏚️ | All-Property</title>
      </Helmet>

      {/* banner */}
      <Banner link="https://i.ibb.co/KhNTdn5/pexels-matthis-volquardsen-2350583.jpg"/>
      {/* searchBox */}
      <div className="relative top-1/4 left-1/2 transform -translate-x-1/2 w-[80vw] md:w-[50vw]">
        <form onSubmit={handleSearch}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block text-xl font-semibold w-full p-4 ps-10  text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Properties by Title"
name="searchBox"
        
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="">
        <Title name={`All Property`}></Title>
      </div>
      <div className="grid lg:grid-cols-4 gap-4 mx-auto">
        {
          
       filteredData?.length > 0 ?
          filteredData?.map((property) => (
          <AdvertisementCard key={property._id} property={property} />
        ))
          :
          removeRejectedProperties?.map((property) => (
          <AdvertisementCard key={property._id} property={property} />
        ))
        
        }
      </div>
      <Footer/>
    </MyContainer>
  );
};

export default AllProperty;
