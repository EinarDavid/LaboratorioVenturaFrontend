import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonFilter } from "../components/Button/ButtonFilter";
import { ButtonIcon } from "../components/Button/ButtonIcon";
import { RowsSelect } from "../components/Input/RowsSelect";
import { SelectFilter } from "../components/Input/SelectFilter";

import { PaginationTable } from "../components/Table/PaginationTable";
import Images from "../config/Images";
import { MainNavigator } from "../navigation/MainNavigator";

import { SectionFilterProduct } from "../components/Section/SectionFilterProduct";

import {
  getProveedorCant,
  getProveedorTodos,
  postProveedorBuscar,
} from "../services/proveedorService";
import { ModalRegProveedor } from "../components/Modal/ModalRegProveedor";
import { RowsForPage } from "../components/Table/RowsForPage";

export const GestionProveedor = () => {
  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [search, setSearch] = useState({
    Codigo: "",
    Nombre: "",
    PrecioCompra: "",
    PrecioVenta: "",
    InventarioActual: "",
    ord: "",
  });
  const [datos, setDatos] = useState([]);
  const [dataOriginal, setDataOriginal] = useState([]);
  const [cantidadPagina, setCantidadPagina] = useState(50);

  useEffect(() => {
    getProveedorTodos().then(({ data }) => {
      setDataOriginal(data);
      console.log("datos", data);
    });
  }, []);

  const handleChangeSearch = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  const cargarDatos = () => {
    try {
      postProveedorBuscar(search).then(({ data }) => {
        setDataOriginal(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    cargarDatos();
  }, [search]);

  const FilterOrder = [
    {
      option: "A - Z",
      id_option: 1,
    },
    {
      option: "Z - A",
      id_option: 2,
    },
  ];


  return (
    <>
      <div className="App">
        <div className="mainNav">
          <MainNavigator />
        </div>
        <div className="containerPadre">
          <div className="container">
          <div className="headerTableSection">
            <h1 className="titleStyle">Gestion de proveedores</h1>
            
            <ButtonIcon
              Image={Images.ADDBLUE}
              Nombre={"Añadir nuevo proveedor"}
              OnClick={() => setModalShow(true)}
            />
            
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
          
          <div className="tablePadreContainer">
            {activeButton ? (
              <>
                <div className="containerFiltros">
                  <SectionFilterProduct
                    handleChangeSearch={handleChangeSearch}
                  />
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
                      <th className="titleTable">Nombre</th>
                      <th className="titleTable">Razón Social</th>
                      <th className="titleTable">NIT</th>
                      <th className="titleTable">Dirección</th>
                      <th className="titleTable">Teléfono</th>
                    </tr>
                  </thead>
                  {datos.map((exa, i) => (
                    <tbody key={i}>
                      <tr>
                        <td>
                          <button
                            className="buttonPrint"
                            onClick={() => navigate("/view/proveedor/" + exa._id)}
                          >
                            <img src={Images.VIEW} width={"25"} alt={"View"} />
                          </button>
                        </td>
                        <td className="containerTable">{i + 1}</td>

                        <td className="containerTable">{exa.Nombre}</td>
                        <td className="containerTable">{exa.RazonSocial}</td>
                        <td className="containerTable">{exa.NIT}</td>
                        <td className="containerTable">{exa.Direccion}</td>
                        <td className="containerTable">{exa.Telefono}</td>
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
                  setLaboratorios={setDatos}
                  laboratoriosOriginal={dataOriginal}
                  cantidadPagina={cantidadPagina}
                  getLaboratorioCant={getProveedorCant}
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <ModalRegProveedor
        modal={modalShow}
        SetModal={setModalShow}
        callback={() => cargarDatos()}
      />
    </>
  );
};
