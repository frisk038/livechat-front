import { createContext, FunctionComponent, useEffect, useState } from "react";
import app, { auth } from "../services/firebase";
import { getAuth, User } from "firebase/auth";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<User | null>(null);

const AuthProvider: FunctionComponent<AuthProviderProps> = (props: AuthProviderProps) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser);
  }, []);

  return <AuthContext.Provider value={currentUser}>{props.children}</AuthContext.Provider>;
};

export default AuthProvider;
