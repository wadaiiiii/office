import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

export function SupabaseAuthProvider({children}){
  const [user,setUser] = useState(null);

  useEffect(()=>{
    const saved = localStorage.getItem('office_user');
    if(saved) setUser(JSON.parse(saved));
  },[]);

  const login = (profile)=>{
    localStorage.setItem('office_user', JSON.stringify(profile));
    setUser(profile);
  };

  const logout = ()=>{
    localStorage.removeItem('office_user');
    setUser(null);
  };

  return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>
}

export const useAuth=()=>useContext(AuthContext);
