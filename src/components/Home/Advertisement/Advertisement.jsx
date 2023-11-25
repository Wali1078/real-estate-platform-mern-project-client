import { useQuery } from "@tanstack/react-query";
import AdvertisementCard from "../AdvertisementCard/AdvertisementCard";
import { getAllProperties } from "../../../api/properties";
import Loader from "../../Shared/Loader";
import Title from "../../Title/Title";

const Advertisement = () => {
  const { data: properties = [], isLoading } = useQuery({
    queryKey: ["properties"],
    queryFn: getAllProperties,
  });
  console.log(properties);
  if (isLoading) return <Loader />;
  return (
    <div>
      <Title name={`Advertisement`}/>
      <div className="grid lg:grid-cols-4 gap-4 mx-auto">
        {properties?.map((property) => (
          <AdvertisementCard key={property._id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
