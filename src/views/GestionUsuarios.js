import React, { useEffect, useState } from "react";
import { MainNavigator } from "../navigation/MainNavigator";

import Images from "../config/Images";

import { ButtonFilter } from "../components/Button/ButtonFilter";
import { SelectFilter } from "../components/Input/SelectFilter";
import { calcularEdad } from "../services/calcEdad";
import { ButtonIcon } from "../components/Button/ButtonIcon";

import {
  postPacienteBuscar,
  postPacienteEliminar,
} from "../services/pacienteService";
import { useNavigate } from "react-router-dom";
import { PaginationTable } from "../components/Table/PaginationTable";
import { RowsSelect } from "../components/Input/RowsSelect";
import { RegUsuario } from "../components/Modal/ModalRegUsuario";
import {
  getUsuarioCant,
  getUsuarioNombres,
  postUsuarioBuscar,
} from "../services/usuarioService";
import { SectionFilterUser } from "../components/Section/SectionFilterUser";

export const GestionUsuarios = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [search, setSearch] = useState({
    Nombre: "",
    CI: "",
    PrimerApellido: "",
    SegundoApellido: "",
    ord: ""
  });
  const [pacientes, setPacientes] = useState([]);
  const [pacientesOriginal, setPacientesOriginal] = useState([]);
  const [cantidadPagina, setCantidadPagina] = useState(10);

  useEffect(() => {
    getUsuarioNombres().then(({ data }) => setPacientesOriginal(data));
  }, []);
  //console.log(pacientesOriginal);

  useEffect(() => console.log(cantidadPagina), [cantidadPagina]);

  const handleChangeSearch = (event) => {
    //console.log(event.target.value)
    setSearch({ ...search, [event.target.name]: event.target.value });
  };
  const cargarDatos = () => {
    try {
      postUsuarioBuscar(search).then(({ data }) => setPacientesOriginal(data));
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    postUsuarioBuscar(search).then(({ data }) => setPacientesOriginal(data));
  }, [search]);

  const FilterOrder = [
    
    {
      option: "Edad Ascendente",
      id_option: 1,
    },
    {
      option: "Edad Descendente",
      id_option: 2,
    },
  ];

  const RowsForPage = [
    {
      option: 5,
      id_option: 1,
    },
    {
      option: 10,
      id_option: 2,
    },
    {
      option: 30,
      id_option: 3,
    },
  ];

  return (
    <>
      <div className="App">
        <div className="mainNav">
          <MainNavigator></MainNavigator>
        </div>
        <div className="containerPadre">
          <div className="headerTableSection">
            <h1 className="titleStyle">Gestion de usuarios</h1>
            <div className="spaceVer10" />
            <ButtonIcon
              Image={Images.ADDBLUE}
              Nombre={"Añadir nuevo usuario"}
              OnClick={() => setModalShow(true)}
            />

            <div className="spaceVer10" />
            <div className="containerFiltro">
              <ButtonFilter
                Nombre={"Filtros"}
                OnClick={() => {
                  setActiveButton(!activeButton);
                }}
                Active={activeButton}
              />
              <div className="spaceRow15" />

              <SelectFilter
                Name={"ord"}
                Placeholder={"Ordenar Por"}
                SelectOption={FilterOrder}
                OnChange={(e) => handleChangeSearch(e)}
              />
              <div className="spaceRow25" />
            </div>
          </div>
          <div className="spaceVer20" />
          <div className="tablePadreContainer">
            {activeButton ? (
              <>
                <div className="containerFiltros">
                  <SectionFilterUser handleChangeSearch={handleChangeSearch} />
                </div>
              </>
            ) : (
              <></>
            )}

            <div className="cardBodyEvaluation">
              <div className="divTable">
                <table className="tableContainer">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="titleTable">Nro</th>
                      <th className="titleTable">C.I.</th>
                      <th className="titleTable">Nombres</th>
                      <th className="titleTable">Primer Apellido</th>
                      <th className="titleTable">Segundo Apellido</th>
                      <th className="titleTable">Edad</th>
                      <th className="titleTable">Cargo</th>
                      <th className="titleTable">Teléfono</th>
                      <th className="titleTable">Sucursal</th>
                      <th className="titleTable">Activo</th>
                    </tr>
                  </thead>
                  {pacientes.map((pac, i) => (
                    <tbody key={i}>
                      <tr>
                        <td>
                          <button
                            className="buttonPrint"
                            onClick={() => navigate("/view/user/" + pac?._id)}
                          >
                            <img src={Images.VIEW} width={"25"} alt={"View"} />
                          </button>
                        </td>
                        <td className="containerTable">{i + 1}</td>
                        <td className="containerTable">{pac?.CI}</td>
                        <td className="containerTable">{pac?.Nombres}</td>
                        <td className="containerTable">
                          {pac?.PrimerApellido}
                        </td>
                        <td className="containerTable">
                          {pac?.SegundoApellido}
                        </td>
                        <td className="containerTable">
                          {calcularEdad(pac?.Fecha_de_Nacimiento)}
                        </td>
                        <td className="containerTable">{pac?.Cargo}</td>
                        <td className="containerTable">{pac?.Telefono}</td>
                        <td className="containerTable">{pac?.Sucursal}</td>
                        <td className="containerTable">{pac?.Activo}</td>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>

              <div className="footerTable">
                <RowsSelect
                  Name={"Page"}
                  LabelInput={"Filas por pagina"}
                  SelectOption={RowsForPage}
                  OnChange={(e) => {
                    setCantidadPagina(Number(e.target.value));
                  }}
                  Value={cantidadPagina || ""}
                />
                <div className="spaceRow20" />
                <PaginationTable
                  setLaboratorios={setPacientes}
                  laboratoriosOriginal={pacientesOriginal}
                  cantidadPagina={cantidadPagina}
                  getLaboratorioCant={getUsuarioCant}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegUsuario modal={modalShow} SetModal={setModalShow} callback={() => cargarDatos()} ></RegUsuario>
    </>
  );
};
