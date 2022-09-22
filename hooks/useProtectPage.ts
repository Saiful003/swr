import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../context/authContext";

export function useProtectPage() {
  const router = useRouter();
  const { currentUser } = useAuth();

  useEffect(() => {
    if (!currentUser) {
      router.push("/login");
    }
  }, []);
}
