import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonFilter } from "../components/Button/ButtonFilter";
import { ButtonIcon } from "../components/Button/ButtonIcon";
import { RowsSelect } from "../components/Input/RowsSelect";
import { SearchInput } from "../components/Input/SearchInput";
import { SelectFilter } from "../components/Input/SelectFilter";

import { PaginationTable } from "../components/Table/PaginationTable";
import Images from "../config/Images";
import { MainNavigator } from "../navigation/MainNavigator";

import { ModalRegProduct } from "../components/Modal/ModalRegProduct";
import { SectionFilterProduct } from "../components/Section/SectionFilterProduct";
import {
  getProductCant,
  getProductTodos,
  postProductoBuscar,
} from "../services/productService";
import { RowsForPage } from "../components/Table/RowsForPage";

export const GestionProduct = () => {
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
    getProductTodos().then(({ data }) => {
      setDataOriginal(data);
      console.log("datos", data);
    });
  }, []);

  const handleChangeSearch = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  const cargarDatos = () => {
    try {
      postProductoBuscar(search).then(({ data }) => {
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
              <h1 className="titleStyle">Gestion de productos</h1>

              <ButtonIcon
                Image={Images.ADDBLUE}
                Nombre={"Añadir nuevo producto"}
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
                        <th className="titleTable">Código</th>
                        <th className="titleTable">Nombre</th>
                        <th className="titleTable">Unid. de med.</th>
                        <th className="titleTable">Precio Compra</th>
                        <th className="titleTable">Precio Venta</th>
                        <th className="titleTable">Descripción</th>
                        <th className="titleTable">Inventario actual</th>
                        <th className="titleTable">Grupo Familia</th>
                        <th className="titleTable">SubGrupo</th>
                      </tr>
                    </thead>
                    {datos.map((exa, i) => (
                      <tbody key={i}>
                        <tr>
                          <td>
                            <button
                              className="buttonPrint"
                              onClick={() =>
                                navigate("/view/product/" + exa._id)
                              }
                            >
                              <img
                                src={Images.VIEW}
                                width={"25"}
                                alt={"View"}
                              />
                            </button>
                          </td>
                          <td className="containerTable">{i + 1}</td>

                          <td className="containerTable">{exa.Codigo}</td>
                          <td className="containerTable">{exa.Nombre}</td>
                          <td className="containerTable">{exa.UnidadMedida}</td>
                          <td className="containerTable">{exa.PrecioCompra}</td>
                          <td className="containerTable">{exa.PrecioVenta}</td>
                          <td className="containerTable">{exa.Descripcion}</td>
                          <td className="containerTable">
                            {exa.InventarioActual}
                          </td>
                          <td className="containerTable">{exa.GrupoFamilia}</td>
                          <td className="containerTable">{exa.SubGrupo}</td>
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
                    getLaboratorioCant={getProductCant}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalRegProduct
        modal={modalShow}
        SetModal={setModalShow}
        callback={() => cargarDatos()}
      ></ModalRegProduct>
    </>
  );
};
