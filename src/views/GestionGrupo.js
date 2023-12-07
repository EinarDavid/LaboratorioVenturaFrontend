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

import { ModalRegGrupo } from "../components/Modal/ModalRegGrupo";
import {
  getGrupoCant,
  getGrupoTodos,
  postGrupoBuscar,
} from "../services/grupoService";

export const GestionGrupo = () => {
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
  const [cantidadPagina, setCantidadPagina] = useState(20);

  useEffect(() => {
    getGrupoTodos().then(({ data }) => {
      setDataOriginal(data);
      console.log("datos", data);
    });
  }, []);

  const handleChangeSearch = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  const cargarDatos = () => {
    try {
      postGrupoBuscar(search).then(({ data }) => {
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
  const RowsForPage = [
    {
      option: 20,
      id_option: 1,
    },
    {
      option: 40,
      id_option: 2,
    },
    {
      option: 60,
      id_option: 3,
    },
  ];
  return (
    <>
      <div className="App">
        <div className="mainNav">
          <MainNavigator />
        </div>
        <div className="containerPadre">
          <div className="headerTableSection">
            <h1 className="titleStyle">Gestion de grupos</h1>
            <div className="spaceVer10" />
            <ButtonIcon
              Image={Images.ADDBLUE}
              Nombre={"Añadir nuevo grupo"}
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
                    </tr>
                  </thead>
                  {datos.map((exa, i) => (
                    <tbody key={i}>
                      <tr>
                        <td>
                          <button
                            className="buttonPrint"
                            onClick={() => navigate("/view/grupo/" + exa._id)}
                          >
                            <img src={Images.VIEW} width={"25"} alt={"View"} />
                          </button>
                        </td>
                        <td className="containerTable">{i + 1}</td>
                        <td className="containerTable">{exa.Nombre}</td>
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
                  getLaboratorioCant={getGrupoCant}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalRegGrupo
        modal={modalShow}
        SetModal={setModalShow}
        callback={() => cargarDatos()}
      />
    </>
  );
};
