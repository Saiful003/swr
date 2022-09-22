import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import supabase from "../config/supabase";
import { IChildren } from "../types";

interface AppContextInterface {
  currentUser: null | { email: string };
  loading: boolean;
  signOutUser: () => void;
}

const AuthContext = React.createContext<AppContextInterface | null>(null);

// custom hook to consume context data
export const useAuth = () => useContext(AuthContext) as AppContextInterface;

export function AuthProvider({ children }: IChildren) {
  const [currentUser, setCurrentUser] = useState<{ email: string } | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // sign out an user
  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/login");
      setLoading(false);
    }
  };

  useEffect(() => {
    // initially set current user
    const supabaseSession = supabase.auth.session();
    if (supabaseSession?.user?.id) {
      setCurrentUser({ email: supabaseSession.user.email! });
    }
    setLoading(false);

    // it's run when everytime auth changed
    supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user?.id) {
        setCurrentUser({ email: session.user.email! });
      } else {
        setCurrentUser(null);
      }
      setLoading(false);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        loading,
        currentUser,
        signOutUser,
      }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
}
