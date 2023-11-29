import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../api/auth";

const useUsers = () => {
    const { data: users = [],isLoading, refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => await getAllUsers(),
      });
  return [users, isLoading,refetch]
}

export default useUsers