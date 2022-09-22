import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../context/authContext";

function Logout() {
  const { signOutUser } = useAuth();
  useEffect(() => {
    signOutUser();
  }, []);

  return null;
}

export default Logout;
