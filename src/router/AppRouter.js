import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { HomeApp } from './HomeApp'
import { LoginApp } from './LoginApp'

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginApp />} />
          <Route path='/*' element={<HomeApp />} />

          <Route path='/' element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
