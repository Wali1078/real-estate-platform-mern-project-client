import AdvertisementCard from "../AdvertisementCard/AdvertisementCard";
import Loader from "../../Shared/Loader";
import Title from "../../Title/Title";
import useProperties from "../../../hooks/useProperties";

const Advertisement = () => {
  const [properties,isLoading] = useProperties()
  // console.log(properties);


  const filteredFraud = properties.filter(prop=>prop.role!=="fraud")
const filteredProp = filteredFraud.filter(prop=>prop.adv==="addAds")

  if (isLoading) return <Loader />;
  return (
    <div>
      <Title name={`Advertisement`}/>
      <div className="grid lg:grid-cols-4 gap-4 mx-auto">
        {filteredProp?.slice(0,6).map((property) => (
          <AdvertisementCard key={property._id} property={property} />
        ))}
      </div>
      {
        filteredProp?.length===0 && <p className="text-center text-2xl font-bold min-h-[150px] mt-20 dark:text-white">No Adv Available</p>
      }
    </div>
  );
};

export default Advertisement;
