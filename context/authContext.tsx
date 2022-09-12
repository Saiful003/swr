import React, { useContext } from "react";
import supabase from "../config/supabase";

interface AuthContextInterface {
  signUp: (emali: string, password: string, phone: string) => void;
}

const AuthContext = React.createContext<AuthContextInterface | null>(null);

// custom hook to access context data
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  //signUp
  const signUp = async (email: string, password: string, phone: string) => {
    const { session, error, user } = await supabase.auth.signUp({
      email,
      password,
      phone,
    });
    console.log(session, error, user);
  };

  const value: AuthContextInterface = {
    signUp,
  };
  //signIn
  const signIn = () => {};
  //signOut
  const signOut = () => {};

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
