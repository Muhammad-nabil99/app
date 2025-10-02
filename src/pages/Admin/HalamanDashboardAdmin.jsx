import DaftarLaporanAdmin from "../../components/Admin/DaftarLaporanAdmin";
import { CardSkeletonLoader } from "../../components/CardSkeletonLoader";
import SpinnerLoading from "../../components/SpinnerLoading";
import useGetLaporanByStatus from "../../features/users/useGetLaporanByStatus";

function HalamanDashboardAdmin() {
  const { data, isLoading } = useGetLaporanByStatus();
  if (isLoading) return <SpinnerLoading />;
  const { laporan1, laporan2 } = data;

  return (
    <div>
      <p className="capitalize font-bold text-xl mt-10">Laporan terbaru</p>
      <div>
        <p>laporan yang sedang di kerjakan</p>
        <div className="flex gap-5 flex-wrap m-auto w-full">
          {isLoading ? (
            <CardSkeletonLoader numCards={laporan1?.length} />
          ) : (
            laporan1?.map((laporan) => (
              <DaftarLaporanAdmin key={laporan.id} {...laporan} />
            ))
          )}
        </div>
      </div>
      <div>
        <h1 className="text-xl font-bold capitalize my-10">laporan lainnya</h1>
        <div className="flex gap-5 flex-wrap m-auto w-full">
          {isLoading ? (
            <CardSkeletonLoader numCards={laporan2?.length} />
          ) : laporan2?.length ? (
            laporan2?.map((laporan) => (
              <DaftarLaporanAdmin key={laporan.id} {...laporan} />
            ))
          ) : (
            <p className="border-2 border-dashed border-black capitalize p-2  rounded-md font-bold m-auto">
              tidak ada laporan
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
export default HalamanDashboardAdmin;
