/* eslint-disable react/prop-types */
import { TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Link } from "react-router-dom";
import { convertDate, lineClamp } from "../../utils/helper";
import DropDown from "../DropDown";
function TableBodyLaporanAdmin({
  id,
  alamat,
  created_at,
  status,
  jenis,
  deskripsi,
  bukti,
  judul,
  index,
}) {
  const updateStatus = {
    id,
    alamat,
    created_at,
    status,
    jenis,
    bukti,
    deskripsi,
    judul,
  };
  
  return (

    <TableBody className="capitalize"> 
      <TableRow>
        <TableCell className="font-medium">{index + 1}</TableCell>
        <TableCell>{convertDate(created_at)}</TableCell>
        <TableCell>{judul}</TableCell>
        <TableCell className="capitalize">{jenis}</TableCell>
        <TableCell>{lineClamp(deskripsi, 10)}</TableCell>
        <TableCell>{alamat}</TableCell>
        <TableCell>
          <DropDown status={status} updateStatus={updateStatus} />
        </TableCell>
        <TableCell className="text-right">
          <Link to={`/admin/laporan/${id}`}>Lihat</Link>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}
export default TableBodyLaporanAdmin;
