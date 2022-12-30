import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../views/Dashboard'
import { GestionExample } from '../views/GestionExample'
import { GestionUsuarios } from '../views/GestionUsuarios'
import { NewLab } from '../views/NewLab'
import { SearchLab } from '../views/SearchLab'

export const HomeApp = () => {
    return (
        <>

            <Routes>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/newLab' element={<NewLab/>} />
                <Route path='/gestionUser' element={<GestionUsuarios/>} />
                <Route path='/gesionExample' element={<GestionExample/>} />
                <Route path='/searchLab' element={<SearchLab/>} />

                <Route path='/*' element={<Navigate to="/dashboard" />} />
            </Routes>

        </>
    )
}
