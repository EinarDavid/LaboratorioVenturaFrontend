import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import { HomeApp } from './HomeApp'
import { LoginApp } from './LoginApp'
import { getUser } from '../services/usuarioService'

export const AppRouter = () => {
  const [user, setUser] = useState(null)
  /*getUser().then(({data})=>{
    console.log("UserData",data)
    setUser(data);
  })*/
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginApp />} />
          <Route path='/*' element={<HomeApp />}
            />
          <Route path='/' element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
    )
  /*if (!user) 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginApp />} />
          <Route path='/*' element={
           user ? (
            <>
              {console.log(user)}
              <HomeApp />
            </>
          ) : (
            <>
              {console.log(user)}
              <Navigate to="/login" replace />
            </>
          )
          } />
          <Route path='/' element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
  else return (<></>);*/
}
