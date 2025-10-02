import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createLaporanAPI } from "../../services/laporanAPI";

function useCreateLaporan() {
  const queryClient = useQueryClient();
  const { mutate: createLaporan, isPending: isCreating } = useMutation({
    mutationFn: createLaporanAPI,
    onSuccess: () => {
      toast.success("berhasil upload");
      queryClient.invalidateQueries({ queryKey: ["laporan"] });
    },
    onError: (error) => {
      console.log(error.message);

      toast.error("gagal membuat laporan");
    },
  });
  return { createLaporan, isCreating };
}
export default useCreateLaporan;
