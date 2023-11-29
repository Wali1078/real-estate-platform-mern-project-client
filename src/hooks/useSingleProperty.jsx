import { useQuery } from "@tanstack/react-query";
import { getSingleProperty } from "../api/properties";
import useAuth from "./useAuth";

export const useSingleProperties = (id) => {
    const {user,loading} = useAuth()
    const { data: singleProperty = [], isLoading, refetch } = useQuery({
        enabled: !loading && !!user?.email,
      queryKey: ["singleProperty"],
      queryFn: ()=>getSingleProperty(id),
    });
    return [singleProperty, isLoading, refetch];
  };
  export default useSingleProperties