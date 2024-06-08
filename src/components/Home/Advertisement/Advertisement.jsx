import AdvertisementCard from "../AdvertisementCard/AdvertisementCard";
import Loader from "../../Shared/Loader";
import Title from "../../Title/Title";
import useProperties from "../../../hooks/useProperties";

const Advertisement = () => {
  const [properties = [], isLoading] = useProperties(); // Default to an empty array if properties is undefined

  // Defensive check to ensure properties is an array before calling .filter
  const filteredFraud = Array.isArray(properties) ? properties.filter(prop => prop.role !== "fraud") : [];
  const filteredProp = filteredFraud.filter(prop => prop.adv === "addAds");

  if (isLoading) return <Loader />;
  return (
    <div>
      <Title name={`Advertisement`}/>
      <div className="grid lg:grid-cols-4 gap-4 mx-auto">
        {filteredProp.slice(0, 12).map((property) => (
          <AdvertisementCard key={property._id} property={property} />
        ))}
      </div>
      {
        filteredProp.length === 0 && <p className="text-center text-2xl font-bold min-h-[150px] mt-20 dark:text-white">No Adv Available</p>
      }
    </div>
  );
};

export default Advertisement;
