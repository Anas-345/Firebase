import { useContext, useState, useEffect, createContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

const Auth = createContext();

export default function AuthContext({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // prevent flash

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser ?? {});
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  if (loading) return null; 

  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
}

export const useAuth = () => useContext(Auth);
