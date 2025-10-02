import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import TableBodyLaporanAdmin from "./TableBodyLaporanAdmin";
import useGetLaporan from "../../features/users/useGetLaporan";
import { TableSkeletonLoader } from "../TableSkeletonLoader";

function TableLaporanAdmin() {
  const { laporan, isLoading } = useGetLaporan();
console.log('testing',laporan);

  if (isLoading)
    return <TableSkeletonLoader numRows={laporan?.length} numCols={8} />;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">No</TableHead>
          <TableHead>Dibuat</TableHead>
          <TableHead>Judul</TableHead>
          <TableHead>Jenis Kerusakan</TableHead>
          <TableHead>Deskripsi</TableHead>
          <TableHead>Alamat</TableHead>
          <TableHead>Status</TableHead>
          <TableHead className="text-right">Detail</TableHead>
        </TableRow>
      </TableHeader>
      {laporan?.map((laporan, index) => (
        <TableBodyLaporanAdmin index={index} key={laporan.id} {...laporan} />
      ))}
    </Table>
  );
}
export default TableLaporanAdmin;
