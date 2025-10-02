import { useNavigate } from "react-router-dom"

function useMoveBack(url = -1){
  const navigate =  useNavigate();
  return () => navigate(url)
}
export default useMoveBack