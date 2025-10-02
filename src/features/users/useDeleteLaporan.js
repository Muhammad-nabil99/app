import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteLaporanAPI } from "../../services/laporanAPI";

function useDeleteLaporan(){
   const queryClient = useQueryClient();
  const { mutate: deleteLaporan, isPending: isDeleting } = useMutation({
    mutationFn: deleteLaporanAPI,
    onSuccess: () => {
      toast.success("berhasil delete");
      queryClient.invalidateQueries({ queryKey: ["laporan"] });
    },
    onError: () => {
      toast.error("gagal menghapus laporan");
    },
  });
  return { deleteLaporan, isDeleting };
}
export default useDeleteLaporan