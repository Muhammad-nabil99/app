/* eslint-disable react/prop-types */
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import statusColor from "../../utils/statusColor";
function DaftarLaporanUser({
  id,
  bukti,
  jenis,
  status,
  deskripsi,
  judul,
  alamat,
}) {
  return (
    <div className="w-1/4 ">
      <Link to={`/admin/laporan/${id}`}>
        <div className="flex flex-col justify-start items-start capitalize">
          <h1 className="font-bold">{judul}</h1>
          <div className="flex items-center text-sm italic">
            <MapPin className="h-3 w-3 mr-1" />
            {alamat}
          </div>
        </div>
        <img
          className="rounded-md w-full h-60 object-cover object-center"
          src={bukti}
          alt="jalan rusak"
        />
        <div className="mx-2 flex justify-between capitalize">
          <div className="flex items-center capitalize p-1 text-xs my-2 font-bold  bg-black w-fit text-white rounded-full">
            #{jenis}
          </div>
          <div
            className={`p-1.5 text-xs my-2 font-bold flex items-center gap-2   w-fit text-white rounded-full ${statusColor(status)?.background}`}
          >
            <div
              className={`w-3 h-3  rounded-full ${statusColor(status)?.dot}`}
            ></div>
            {status}
          </div>
        </div>
      </Link>

      <p className="w-full ">{deskripsi}</p>
    </div>
  );
}
export default DaftarLaporanUser;
