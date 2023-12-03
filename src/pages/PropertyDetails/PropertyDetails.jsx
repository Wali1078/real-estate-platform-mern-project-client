import { Helmet } from "react-helmet-async";
import Banner from "../../components/Shared/Banner";
import MyContainer from "../../components/Shared/MyContainer";
import Title from "../../components/Title/Title";
import { useLoaderData, useParams } from "react-router-dom";
import SinglePropertyCard from "../../components/Home/SinglePropertyCard/SinglePropertyCard";
import Footer from "../../components/Home/Footer/Footer";
import ReviewSection from "../../components/ReviewSection/ReviewSection";
import useSingleProperties from "../../hooks/useSingleProperty";

const PropertyDetails = () => {
  // const data = useLoaderData();
  // console.log(data);

  const { id } = useParams();
  const [singleProperty, isLoading, refetch] = useSingleProperties(id);
  // console.log(singleProperty);

  
  return (
    <MyContainer>
      <Helmet>
        <title>Dream🏚️ | Property</title>
      </Helmet>
      <Banner link={"https://i.ibb.co/jHgJCMq/pexels-athena-2962124.jpg"} />

      <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 w-[80vw]  md:max-w-[50vw] bg-slate-400">
        <Title name={`View Property Details Here`}></Title>
      </div>

      <Title name={`Property Details `}></Title>
      <div>
        <SinglePropertyCard property={singleProperty} />
      </div>
      <div>
        <ReviewSection property={singleProperty} />
      </div>
    
      <Footer />
    </MyContainer>
  );
};

export default PropertyDetails;
