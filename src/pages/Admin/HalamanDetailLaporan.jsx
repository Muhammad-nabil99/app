import { MapPin } from "lucide-react";
import SpinnerLoading from "../../components/SpinnerLoading";
import statusColor from "../../utils/statusColor";
import useGetDetailLaporan from "../../features/users/useGetDetailLaporan";

function HalamanDetailLaporanAdmin() {
  let { detailLaporan, isLoading: isLoadingData } = useGetDetailLaporan();
  const isLoading = isLoadingData;

  if (isLoading) return <SpinnerLoading />;

  const { id, bukti, jenis, status, deskripsi, judul, alamat } =
    detailLaporan[0];

  return (
    <div className="w-full" id={id}>
      <div className="flex items-center justify-between capitalize">
        <div>
          <h1 className="font-bold text-2xl">{judul}</h1>

          <div className="my-1 italic text-sm flex items-center">
            <MapPin className="h-4 w-4 mr-1 " />
            {alamat}
          </div>
        </div>
      </div>
      <img
        className="rounded-md w-full h-72 object-cover object-center"
        src={bukti}
        alt={judul}
      />
      <div className="mx-2 flex justify-between capitalize">
        <div className="flex gap-2 items-center">
          Jenis Keruskan Jalan :
          <div className="flex items-center capitalize p-1 text-xs my-2 font-bold  bg-black w-fit text-white rounded-full">
            #{jenis}
          </div>
        </div>
      </div>
      <div
        className={`capitalize p-1.5 text-xs my-2 font-bold flex items-center gap-2   w-fit text-white rounded-full ${statusColor(status)?.background}`}
      >
        <div
          className={`w-3 h-3  rounded-full ${statusColor(status)?.dot}`}
        ></div>
        {status}
      </div>
      <h2 className="font-bold capitalize my-4">Detail</h2>
      <p className="w-full text-justify p-2 ">{deskripsi}</p>
    </div>
  );
}
export default HalamanDetailLaporanAdmin;
