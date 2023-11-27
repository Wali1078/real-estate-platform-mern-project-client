import AdvertisementCard from "../AdvertisementCard/AdvertisementCard";
import Loader from "../../Shared/Loader";
import Title from "../../Title/Title";
import useProperties from "../../../hooks/useProperties";

const Advertisement = () => {
  const [properties,isLoading] = useProperties()
  // console.log(properties);
  if (isLoading) return <Loader />;
  return (
    <div>
      <Title name={`Advertisement`}/>
      <div className="grid lg:grid-cols-4 gap-4 mx-auto">
        {properties?.slice(0,4).map((property) => (
          <AdvertisementCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
