import { useQuery } from "@tanstack/react-query";
import { getLaporan } from "../../services/laporanAPI";

function useGetLaporanByUserId() {
  const { data: laporan, isLoading } = useQuery({
    queryKey: ["laporan"],
    queryFn: getLaporan,
  });
  return { laporan, isLoading };
}
export default useGetLaporanByUserId;
