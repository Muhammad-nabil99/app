import { Navigate, Route, Routes } from "react-router-dom";
import AppLayoutAdmin from "../Layouts/AppLayoutAdmin";
import HalamanDashboardAdmin from "../pages/Admin/HalamanDashboardAdmin";
import HalamanBuatLaporanAdmin from "../pages/Admin/HalamanDaftarLaporanAdmin";
import HalamanDetailLaporanAdmin from "../pages/Admin/HalamanDetailLaporan";
import ProtectedRoutesAdmin from "./ProtectedRoutesAdmin";

function AdminRoutes() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoutesAdmin role="admin">
            <AppLayoutAdmin />
          </ProtectedRoutesAdmin>
        }
      >
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="/dashboard" element={<HalamanDashboardAdmin />} />
        <Route path="/laporan" element={<HalamanBuatLaporanAdmin />} />
        <Route path="/laporan/:id" element={<HalamanDetailLaporanAdmin />} />
      </Route>
    </Routes>
  );
}
export default AdminRoutes;
