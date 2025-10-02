import { LayoutList } from "lucide-react";
import TableLaporanAdmin from "../../components/Admin/TableLaporanAdmin";
function HalamanBuatLaporanAdmin() {
  return (
    <div>
      <div className=" flex my-10 items-center gap-1">
        <LayoutList className="w-5 h-5" />
        <h1 className="font-bold capitalize  text-xl">Daftar laporan</h1>
      </div>
      <TableLaporanAdmin />
    </div>
  );
}
export default HalamanBuatLaporanAdmin;
