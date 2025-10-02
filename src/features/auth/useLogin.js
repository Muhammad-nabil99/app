import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginAPI } from "../../services/authAPI";
import toast from "react-hot-toast";

function useLogin() {
  const queryClient = useQueryClient();
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginAPI,
    onSuccess: () => {
      toast.success("Login berhasil");
      queryClient.invalidateQueries({ queryKey: ["user"] });
    },
    onError: (error) => {
      console.log("Login error:", error.message);
      if (error?.message?.toLowerCase().includes("email not confirmed")) {
        toast.error("Email belum dikonfirmasi. Silakan cek email Anda.");
      } else if (
        error?.message?.toLowerCase().includes("invalid login credentials")
      ) {
        toast.error("Email atau password salah.");
      } else {
        toast.error("Login gagal: " + error.message);
      }
    },
  });
  return { login, isPending };
}
export default useLogin;
