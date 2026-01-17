import { createContext, useEffect, useState } from 'react';

export const AdminContext = createContext() 
const AdminContextProvider = ({children}) => {

      const [token, setToken] = useState(localStorage.getItem('token')? localStorage.getItem('token') : "");

  useEffect(()=>{
    localStorage.setItem('token', token)
  }, [token])

    const value = {token, setToken}
    return (
        <AdminContext.Provider value={value}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminContextProvider;