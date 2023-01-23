import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../views/Dashboard'
import { EditLab } from '../views/EditLab'
import { GestionTest } from '../views/GestionTest'
import { GestionUsuarios } from '../views/GestionUsuarios'
import { NewLab } from '../views/NewLab'
import { SearchLab } from '../views/SearchLab'
import { ViewPac } from '../views/ViewPac'

export const HomeApp = () => {
    return (
        <>

            <Routes>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/newLab' element={<NewLab/>} />
                <Route path='/gestionUser' element={<GestionUsuarios/>} />
                <Route path='/gesionTest' element={<GestionTest/>} />
                <Route path='/searchLab' element={<SearchLab/>} />
                <Route path='/edit/examen/:labo/:exa' element={<EditLab/> } />
                <Route path='/view/paciente/:idPaciente' element={<ViewPac/> } />

                <Route path='/*' element={<Navigate to="/dashboard" />} />
            </Routes>

        </>
    )
}
