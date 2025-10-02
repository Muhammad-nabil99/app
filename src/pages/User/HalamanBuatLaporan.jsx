import LaporanUser from "../../components/User/LaporanUser";
import { SquarePlus } from "lucide-react";
function HalamanBuatLaporanUser() {
  return (
    <div>
      <div className="flex mt-10 items-center gap-1">
        <SquarePlus className="w-5 h-5" />
        <h1 className="font-bold capitalize  text-xl">Buat Laporan</h1>
      </div>
      <LaporanUser />
    </div>
  );
}
export default HalamanBuatLaporanUser;
