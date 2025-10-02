import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createLaporanAPI } from "../../services/laporanAPI";

function useUpdateLaporan() {
  const queryClient = useQueryClient();
  const { mutate: editLaporan, isPending: isEditing } = useMutation({
    mutationFn: createLaporanAPI,
    onSuccess: () => {
      toast.success("berhasil edit");
      queryClient.invalidateQueries({ queryKey: ["laporan"] });
    },
    onError: () => {
      toast.error("gagal edit laporan");
    },
  });
  return { editLaporan, isEditing };
}
export default useUpdateLaporan;
