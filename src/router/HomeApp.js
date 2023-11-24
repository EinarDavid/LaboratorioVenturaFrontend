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

export const HomeApp = () => {
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

        <Route path="/gestionUsuarios" element={<GestionUsuarios />} />
        <Route path="/view/user/:id" element={<ViewUser />} />
        
        <Route path="/gestionProduct" element={<GestionProduct />} />
        <Route path="/view/product/:id" element={<ViewProduct />} />

        <Route path="/gestionStock" element={<GestionStock />} />
        <Route path="/view/stock/:id" element={<ViewStock />} />

        <Route path="/gestionSale" element={<GestionSale />} />
        <Route path="/newSale" element={<NewSale />} />

        <Route path="/*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </>
  );
};
