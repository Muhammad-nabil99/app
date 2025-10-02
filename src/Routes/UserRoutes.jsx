import { Navigate, Route, Routes } from "react-router-dom";
import AppLayoutUser from "../Layouts/AppLayoutUser";
import HalamanDashboardUser from "../pages/User/HalamanDashboardUser";
import HalamanBuatLaporanUser from "../pages/User/HalamanBuatLaporan";
import HalamanDetailLaporanUser from "../pages/User/HalamanDetailLaporan";
import ProtectedRoutesUser from "./ProtectedRoutesUser";

function UserRouter() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoutesUser role="user">
            <AppLayoutUser />
          </ProtectedRoutesUser>
        }
      >
        <Route index element={<Navigate to="/user/dashboard" replace />} />
        <Route path="dashboard" element={<HalamanDashboardUser />} />
        <Route path="laporan" element={<HalamanBuatLaporanUser />} />
        <Route path="laporan/:id" element={<HalamanDetailLaporanUser />} />
      </Route>
    </Routes>
  );
}
export default UserRouter;
