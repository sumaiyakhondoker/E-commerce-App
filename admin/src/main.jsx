import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import router from './routes/routes.jsx'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';
import AdminContextProvider from './context/AdminContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AdminContextProvider>
      <RouterProvider router={router} />
      <Toaster></Toaster>
    </AdminContextProvider>
      
  </StrictMode>,
)
