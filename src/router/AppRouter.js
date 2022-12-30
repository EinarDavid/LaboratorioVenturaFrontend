import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { HomeApp } from './HomeApp'
import { LoginApp } from './LoginApp'

export const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<LoginApp />} />
          <Route path='/*' element={<HomeApp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
