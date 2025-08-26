import { Outlet, useNavigate } from "react-router";
import { usePersitentStorage } from "../../hooks/usePersitentStorage";
import { useEffect, useMemo } from "react";

export const AuthLayout = () => {
  const navigate = useNavigate();
  const { getItem } = usePersitentStorage();

  const token = getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token]);

  return <Outlet />;
};
