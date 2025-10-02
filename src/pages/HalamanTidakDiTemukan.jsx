import ButtonBack from "../components/ButtonBack";

function HalamanTidakDiTemukan() {
  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you’re looking for does not exist.</p>
      <div className=" w-full flex justify-center my-10">
        <ButtonBack style={"bg-primary "}>Kembali ke Dashboard</ButtonBack>
      </div>
    </div>
  );
}
export default HalamanTidakDiTemukan;
