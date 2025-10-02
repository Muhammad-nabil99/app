import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signUpAPI } from "../../services/authAPI";
import toast from "react-hot-toast";

function useSignUp() {
  const queryClient = useQueryClient();
  const { mutate: signUp, isPending } = useMutation({
    mutationFn: signUpAPI,
    onSuccess: () => {
      toast.success("Registrasi berhasil");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.log(error.message);
      toast.error("Registrasi gagal");
    },
  });
  return { signUp, isPending };
}
export default useSignUp;
