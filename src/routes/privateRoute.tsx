import React from 'react'
import { Navigate } from 'react-router-dom'

interface Props {
  component: React.ComponentType
  path?: string
  roles: Array<string>
  isAuthenticated: boolean
}

export const PrivateRoute: React.FC<Props> = ({ component: RouteComponent, roles, isAuthenticated }) => {
  const user = { role: 'admin' }
  const userHasRequiredRole = user && roles.includes(user.role) ? true : false

  if (isAuthenticated && userHasRequiredRole) {
    return <RouteComponent />
  }

  if (isAuthenticated && !userHasRequiredRole) {
    // return <Error />;
  }

  return <Navigate to="/" />
}
