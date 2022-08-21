import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'

interface IProps {
  isAuthenticated: boolean
}

export const ProtectedRoutes: React.FC<IProps> = ({ isAuthenticated }) => {
  const location = useLocation()
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" state={{ from: location }} replace />
}
