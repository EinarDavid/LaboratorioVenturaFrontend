import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../views/Dashboard";
import { EditLab } from "../views/EditLab";
import { GestionTest } from "../views/GestionTest";
import { GestionPacientes } from "../views/GestionPacientes";
import { NewLab } from "../views/NewLab";
import { SearchLab } from "../views/SearchLab";
import { ViewExa } from "../views/ViewExa";
import { ViewPac } from "../views/ViewPac";
import { GestionUsuarios } from "../views/GestionUsuarios";
import { ViewUser } from "../views/ViewUser";
import { GestionProduct } from "../views/GestionProduct";
import { GestionStock } from "../views/GestionStock";
import { ViewProduct } from "../views/ViewProduct";
import { GestionSale } from "../views/GestionSale";
import { NewSale } from "../views/NewSale";
import { ViewStock } from "../views/ViewStock";
import { GestionProveedor } from "../views/GestionProveedor";
import { ViewProveedor } from "../views/ViewProveedor";
import { GestionGrupo } from "../views/GestionGrupo";
import { GestionSubGrupo } from "../views/GestionSubGrupo";
import { ViewGrupo } from "../views/ViewGrupo";
import { ViewSubGrupo } from "../views/ViewSubGrupo";
import { GestionSucursales } from "../views/GestionSucursales";

import { useNavigate } from 'react-router-dom';
import { Sesion } from "../services/Sesion";


export const HomeApp = () => {

  const navigate = useNavigate();

  const Inicio = () =>{
    navigate("/")
  }

  Sesion(Inicio);

  return (
    <>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/newLab" element={<NewLab />} />
        <Route path="/gestionUser" element={<GestionPacientes />} />
        <Route path="/gestionTest" element={<GestionTest />} />
        <Route path="/searchLab" element={<SearchLab />} />
        <Route path="/edit/examen/:labo/:exa" element={<EditLab />} />
        <Route path="/view/paciente/:idPaciente" element={<ViewPac />} />
        <Route path="/view/examen/:idExamen" element={<ViewExa />} />

        <Route path="/gestionSucursales" element={<GestionSucursales />} />

        <Route path="/gestionUsuarios" element={<GestionUsuarios />} />
        <Route path="/view/user/:id" element={<ViewUser />} />

        <Route path="/gestionProveedor" element={<GestionProveedor/>} />
        <Route path="/view/proveedor/:id" element={<ViewProveedor />} />
        
        <Route path="/gestionProduct" element={<GestionProduct />} />
        <Route path="/view/product/:id" element={<ViewProduct />} />

        <Route path="/gestionGrupo" element={<GestionGrupo />} />
        <Route path="/view/grupo/:id" element={<ViewGrupo />} />

        <Route path="/gestionSubgrupo" element={<GestionSubGrupo />} />
        <Route path="/view/subgrupo/:id" element={<ViewSubGrupo />} />

        <Route path="/gestionStock" element={<GestionStock />} />
        <Route path="/view/stock/:id" element={<ViewStock />} />

        <Route path="/gestionSale" element={<GestionSale />} />
        <Route path="/newSale" element={<NewSale />} />



        <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
};
