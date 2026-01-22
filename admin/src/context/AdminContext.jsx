import { createContext, useEffect, useState } from 'react';

export const AdminContext = createContext() 
const AdminContextProvider = ({children}) => {

      const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token') : "");
      const currency = "$"
      const backendUrl = import.meta.env.VITE_BACKEND_URL

  useEffect(()=>{
    localStorage.setItem('token', token)
  }, [token])

    const value = {token, setToken, currency, backendUrl}
    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;