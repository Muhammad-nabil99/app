import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useGetUser from "../features/auth/useGetUser";

function ProtectedRoutesAdmin({ children, role }) {
  const { user, isLoading } = useGetUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !isLoading) {
      navigate("/masuk", { replace: true });
      return;
    }
    if (user?.user_metadata?.role !== role && !isLoading) {
      navigate(`/user/dashboard`);
    }
  }, [user, isLoading, navigate, role]);
  if (!user) return;
  return children;
}
export default ProtectedRoutesAdmin;
