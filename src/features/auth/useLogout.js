import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { logoutUserAPI } from "../../services/authAPI";
import { useNavigate } from "react-router-dom";

function useLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout, isPending } = useMutation({
    mutationFn: logoutUserAPI,
    onSuccess: () => {
      toast.success("Logout berhasil");
      queryClient.removeQueries({ queryKey: ["user"] });
      navigate("/masuk");
    },
    onError: (error) => {
      console.log("Logout error:", error.message);
    },
  });
  return { logout, isPending };
}
export default useLogout;
