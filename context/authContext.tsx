import React, { useContext, useState } from "react";
import { IChildren } from "../types";

interface AuthContextInterface {
  user: null | string;
}

const AuthContext = React.createContext<AuthContextInterface | null>(null);

// custom hook to access context data
export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: IChildren) {
  const [user, setUser] = useState("name");

  const value = { user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
