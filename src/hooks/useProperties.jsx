import { useQuery } from "@tanstack/react-query";
import { getAllProperties } from "../api/properties";

const useProperties = () => {
    const { data: properties = [], isLoading } = useQuery({
        queryKey: ["properties"],
        queryFn: getAllProperties,
      });
  return [properties,isLoading]
  
}

export default useProperties

