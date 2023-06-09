import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import ProtectedRoutes from '../components/ProtectedRoutes'
import DashboardPage from '../pages/DashboardPage'
import LoginPage from '../pages/LoginPage'
import RegisterPage from '../pages/RegisterPage'

export const RoutesComponent = () => {

  return (
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />}/>
        <Route element={<ProtectedRoutes />} >
          <Route path="/dashboard" element={<DashboardPage />}/>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

