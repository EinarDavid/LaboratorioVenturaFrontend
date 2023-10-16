import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Dashboard } from '../views/Dashboard'
import { EditLab } from '../views/EditLab'
import { GestionTest } from '../views/GestionTest'
import { GestionPacientes } from '../views/GestionPacientes'
import { NewLab } from '../views/NewLab'
import { SearchLab } from '../views/SearchLab'
import { ViewExa } from '../views/ViewExa'
import { ViewPac } from '../views/ViewPac'
import { GestionUsuarios } from '../views/GestionUsuarios'

export const HomeApp = () => {
    return (
        <>

            <Routes>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/newLab' element={<NewLab/>} />
                <Route path='/gestionUser' element={<GestionPacientes/>} />
                <Route path='/gesionTest' element={<GestionTest/>} />
                <Route path='/searchLab' element={<SearchLab/>} />
                <Route path='/edit/examen/:labo/:exa' element={<EditLab/> } />
                <Route path='/view/paciente/:idPaciente' element={<ViewPac/> } />
                <Route path='/view/examen/:idExamen' element={<ViewExa/>} />
                <Route path='/gestionusUarios' element={<GestionUsuarios/>}/>

                <Route path='/*' element={<Navigate to="/dashboard" />} />
            </Routes>

        </>
    )
}
