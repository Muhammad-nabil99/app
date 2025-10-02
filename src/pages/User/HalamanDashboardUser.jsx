import { Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SpinnerLoading from "../../components/SpinnerLoading";
import DaftarLaporanUser from "../../components/User/DaftarLaporanUser";
import useGetLaporanByUserId from "../../features/users/useGetLaporanByUserId";
import useGetUser from "../../features/auth/useGetUser";

function HalamanDashboardUser() {
  const navigate = useNavigate();
  const { user, isLoadingUser } = useGetUser();
  const userId = user?.id;
  
  const { laporan, isLoadingLaporan } = useGetLaporanByUserId(userId);
  const isLoading = isLoadingLaporan || isLoadingUser;

  if (isLoading) return <SpinnerLoading />;

  return (
    <div>
      <div className="w-full h-52 flex justify-center items-center bg-gradient-to-r from-indigo-500 via-violet-500 to-violet-800 p-6 rounded-lg text-white">
        <h1 className="flex items-center gap-2 font-bold text-2xl capitalize">
          <Megaphone />
          LaporJalan Konsel
        </h1>
      </div>
      <p className="capitalize font-bold text-2xl my-10 ">Daftar Laporan</p>
      <div className="w-full flex justify-center">
        <div className="flex gap-5 flex-wrap m-auto w-full">
          {laporan?.map((laporan) => (
            <DaftarLaporanUser key={laporan.id} {...laporan} />
          ))}
          {!laporan?.length && (
            <div className=" flex w-full h-1/2 p-10 rounded-md border-2 border-gray-900 border-dotted bg-gray-200  justify-center">
              <div className="flex flex-col gap-5">
                <p className="text-center text-gray-400 font-bold text-lg">
                  Laporan Kosong
                </p>
                <button
                  onClick={() => navigate("/user/laporan")}
                  className="p-2 bg-black w-fit m-auto text-sm text-white rounded-lg font-bold "
                >
                  Buat Laporan
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default HalamanDashboardUser;
