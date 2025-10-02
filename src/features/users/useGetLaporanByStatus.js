import { useQuery } from "@tanstack/react-query";
import { getLaporanByStatus } from "../../services/laporanAPI";

function useGetLaporanByStatus() {
  const { data, isLoading } = useQuery({
    queryKey: ["laporan", "by-status"],
    queryFn: getLaporanByStatus,
  });
  return { data, isLoading };
}
export default useGetLaporanByStatus;
