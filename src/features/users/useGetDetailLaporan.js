import { useQuery } from "@tanstack/react-query";
import { getLaporanById } from "../../services/laporanAPI";
import { useParams } from "react-router-dom";

function useGetDetailLaporan() {
  const { id } = useParams();
  

  const { data: detailLaporan, isLoading } = useQuery({
    queryKey: ["laporan", id],
  queryFn: () => getLaporanById(id),
    retry : false
  });
  
  return { detailLaporan, isLoading };
}
export default useGetDetailLaporan;
