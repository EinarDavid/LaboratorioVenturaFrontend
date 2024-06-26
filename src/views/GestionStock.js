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
import { getExamenCant, getExamenTodos } from "../services/examenService";
import { ModalRegProduct } from "../components/Modal/ModalRegProduct";
import { SectionFilterProduct } from "../components/Section/SectionFilterProduct";
import { ModalRegStock } from "../components/Modal/ModalRegStock";
import { getStockCant, getStockTodos, postStockBuscar } from "../services/stockService";
import { convertDate } from "../services/convertDate";
import { RowsForPage } from "../components/Table/RowsForPage";

export const GestionStock = () => {
  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [search, setSearch] = useState({
    Codigo: "",
    Nombre: "",
    ord: "",
  });
  const [datos, setDatos] = useState([]);
  const [dataOriginal, setDataOriginal] = useState([]);
  const [cantidadPagina, setCantidadPagina] = useState(50);

  useEffect(() => {
    getStockTodos().then(({ data }) => setDataOriginal(data));
  }, []);

  const handleChangeSearch = (event) => {
    //console.log(event.target.value)
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  const cargarDatos = () => {
    try {
      postStockBuscar(search).then(({ data }) => setDataOriginal(data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    cargarDatos()
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
            <h1 className="titleStyle">Gestion de Inventarios</h1>
            
            <ButtonIcon
              Image={Images.ADDBLUE}
              Nombre={"Añadir nuevo inventario"}
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
                      <th className="titleTable">Proveedor</th>
                      <th className="titleTable">Tipo de movimiento</th>
                      <th className="titleTable">Motivo</th>
                      <th className="titleTable">Fecha - hora</th>
                      <th className="titleTable">Monto Total</th>
                      
                    </tr>
                  </thead>
                  {datos.map((exa, i) => (
                    <tbody key={i}>
                      <tr>
                        <td>
                          <button
                            className="buttonPrint"
                            onClick={() => navigate("/view/stock/" + exa._id)}
                          >
                            <img src={Images.VIEW} width={"25"} alt={"View"} />
                          </button>
                        </td>
                        <td className="containerTable">{i + 1}</td>

                        <td className="containerTable">{exa.Proveedor}</td>
                        <td className="containerTable"> {exa.TipoMovimiento}</td>
                        <td className="containerTable"> {exa.Motivo}</td>
                        <td className="containerTable">{convertDate(exa.Fecha)}</td>
                        <td className="containerTable">{exa.MontoTotal}</td>
                        
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
                  getLaboratorioCant={getStockCant}
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <ModalRegStock
        modal={modalShow}
        SetModal={setModalShow}
        callback={() => {cargarDatos(); console.log("Entro a cargar datos")}}
      ></ModalRegStock>
    </>
  );
};
