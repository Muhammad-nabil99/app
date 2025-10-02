import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../services/authAPI";

function useGetUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });
  return { user, isLoading };
}
export default useGetUser;
