import { useQuery } from "@tanstack/react-query";
import { getAgentProperty } from "../../../../api/properties";
import useAuth from "../../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import Title from "../../../../components/Title/Title";
import AdvertisementCard from "../../../../components/Home/AdvertisementCard/AdvertisementCard";
import Loader from "../../../../components/Shared/Loader";


const MyAddedProperties = () => {
  const { user, loading } = useAuth();
  const {
    data: agentProperties = [],
    isLoading,
    refetch,
  } = useQuery({
    enabled: !loading && !!user?.email,
    queryKey: ["agentProperties"],
    queryFn: async () => await getAgentProperty(user?.email),
  });

  console.log(agentProperties);


  if (loading) return <Loader />

  return (
    <div>
      <Helmet>
        <title>My Added Properties</title>
      </Helmet>
      <Title name={`My Added Properties`}></Title>

      <div className="grid lg:grid-cols-3 gap-4 mx-auto">
        {agentProperties &&
          agentProperties?.map((prop) => (
            <AdvertisementCard
              key={prop._id}
              property={prop}
              isGuest={true}
              refetch={refetch}
            />
          ))}
      </div>
      {(!isLoading && agentProperties?.length === 0) && (
        <p className="flex justify-center items-center text-xl font-bold h-[60vh]">{`You Don't have added any Property`}</p>
      )}
    </div>
  );
};

export default MyAddedProperties;
