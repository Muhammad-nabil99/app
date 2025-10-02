import { MapPin, PenLine, Trash2 } from "lucide-react";
import useGetDetailLaporan from "../../features/users/useGetDetailLaporan";
import SpinnerLoading from "../../components/SpinnerLoading";
import statusColor from "../../utils/statusColor";
import { useState } from "react";
import useDeleteLaporan from "../../features/users/useDeleteLaporan";
import LaporanUser from "../../components/User/LaporanUser";
import { useNavigate } from "react-router-dom";

function HalamanDetailLaporanUser() {
  const navigate = useNavigate();
  let { detailLaporan, isLoading: isLoadingData } = useGetDetailLaporan();
  const { deleteLaporan, isDeleting } = useDeleteLaporan();
  const [edit, isEdit] = useState(false);
  const isLoading = isDeleting || isLoadingData;

  if (isLoading) return <SpinnerLoading />;

  const { id, bukti, jenis, status, deskripsi, judul, alamat } =
    detailLaporan[0];

  function onDelete() {
    deleteLaporan(id);

    !isLoading && navigate("/user/dashboard");
  }

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
        <div className="flex gap-2 w-[10rem]">
          <button
            onClick={() => isEdit(!edit)}
            disabled={isLoading}
            className="flex justify-evenly items-center text-sm w-1/2 bg-yellow-600 p-1 rounded-lg font-bold text-white"
          >
            <PenLine className="w-4 h-4" />
            Edit
          </button>
          <button
            disabled={isLoading}
            onClick={onDelete}
            className="flex justify-evenly items-center text-sm w-1/2 bg-red-600 p-1 rounded-lg font-bold text-white"
          >
            <Trash2 className="w-4 h-4" />
            Hapus
          </button>
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
      {edit && <LaporanUser isEdit={isEdit} editValues={detailLaporan?.[0]} />}
    </div>
  );
}
export default HalamanDetailLaporanUser;
