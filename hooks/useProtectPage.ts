import { useRouter } from "next/router";
import { useEffect } from "react";
import { useAuth } from "../context/authContext";

export function useProtectPage() {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);
}
