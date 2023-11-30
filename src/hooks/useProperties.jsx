import { useQuery } from "@tanstack/react-query";
import { getAllProperties } from "../api/properties";

const useProperties = () => {
    const { data: properties = [], isLoading,refetch } = useQuery({
        queryKey: ["properties"],
        queryFn: getAllProperties,
      });
  return [properties,isLoading,refetch]
  
}

export default useProperties

