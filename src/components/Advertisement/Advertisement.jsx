import { useQuery } from "@tanstack/react-query";
import AdvertisementCard from "../AdvertisementCard/AdvertisementCard";
import { getAllProperties } from "../../api/properties";
import Loader from "../Shared/Loader";

const Advertisement = () => {
  const { data: properties = [], isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: getAllProperties,
  });
  console.log(properties);
  if (isLoading) return <Loader />;
  return (
    <div>
      <h1 className="text-6xl text-center">Adv</h1>
      <div className="grid lg:grid-cols-4 gap-4 mx-auto">
        {properties?.map((property) => (
          <AdvertisementCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
