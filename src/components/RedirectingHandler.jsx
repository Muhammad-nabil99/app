import { useNavigate } from "react-router-dom";
import useGetUser from "../features/auth/useGetUser";
import { useEffect } from "react";
function RedirectingHandler() {
  const { user, isLoading } = useGetUser();
  console.log("cek", user);

  const navigate = useNavigate();
  useEffect(() => {
    if (user?.user_metadata?.role && !isLoading) {
      navigate(`/${user?.user_metadata?.role}/dashboard`);
    }
    navigate("/masuk");
  }, [user, navigate, isLoading]);
  return null;
}
export default RedirectingHandler;
