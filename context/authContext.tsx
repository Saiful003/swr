import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import supabase from "../config/supabase";
import { IChildren } from "../types";

interface IUser {
  role: string;
  email: string;
}

interface AppContextInterface {
  user: IUser | null;
  signOutUser: () => void;
}

const AuthContext = React.createContext<AppContextInterface | null>(null);

// custom hook to consume context data
export const useAuth = () => useContext(AuthContext) as AppContextInterface;

export function AuthProvider({ children }: IChildren) {
  const [user, setUser] = useState<IUser | null>(null);
  const router = useRouter();

  // sign out an user
  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/login");
    }
  };

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser({
          email: session?.user?.email!,
          role: session?.user?.role!,
        });
      }
      if (event === "SIGNED_OUT") {
        setUser(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        signOutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
