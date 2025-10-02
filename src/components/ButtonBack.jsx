import { IoIosArrowBack } from "react-icons/io";
import useMoveBack from "../hooks/useMoveBack";
function ButtonBack({ children,url }) {
  const back = useMoveBack();
  return (
    <button
      onClick={() =>back(url)}
      className="border-2 p-2 rounded-md border-gray-300 flex items-center gap-2"
    >
      <IoIosArrowBack />
      <span>{children || "Kembali"}</span>
    </button>
  );
}
export default ButtonBack;
