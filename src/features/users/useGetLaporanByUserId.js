import { useQuery } from "@tanstack/react-query";
import { getLaporanByUserId } from "../../services/laporanAPI";

function useGetLaporanByUserId(userId) {
  const { data: laporan, isLoading } = useQuery({
    queryKey: ["laporan", userId],
    queryFn: () => getLaporanByUserId(userId),
    enabled: !!userId,
  });
  return { laporan, isLoading };
}
export default useGetLaporanByUserId;
