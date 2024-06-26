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

import { ModalRegSubgrupo } from "../components/Modal/ModalRegSubgrupo";
import {
  getSubGrupoCant,
  getSubGrupoTodos,
  postSubGrupoBuscar,
} from "../services/subgrupoService";
import {
  getGrupoTodos,
  getGrupoUno,
  postGrupoBuscar,
} from "../services/grupoService";
import { RowsForPage } from "../components/Table/RowsForPage";

export const GestionSubGrupo = () => {
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
  const [dataGrupo, setDataGrupo] = useState();

  useEffect(() => {
    getGrupoTodos().then(({ data }) => {
      console.log("Grupo", data);
      setDataGrupo(data);
    });
  }, []);

  const handleChangeSearch = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  const cargarDatos = () => {
    try {
      postSubGrupoBuscar(search).then(({ data }) => {
        data = data.map((e) => {
          var NewData = dataGrupo?.find((a) => a._id === e.Grupo);
          //console.log("GrupoRes", NewData, e);
          return { ...e, GrupoText: NewData?.Nombre };
        });
        setDataOriginal(data);
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    cargarDatos();
  }, [search, dataGrupo]);

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

  /*const BuscarGrupo = async (_idGroup) => {
    let Nombre = "";
    if (_idGroup !== undefined) {
      try {
        const { data } = await getGrupoUno(_idGroup);
        console.log("DataRes", data.Nombre);
        Nombre = data.Nombre;
      } catch (error) {
        console.error("Error fetching group:", error);
      }
    }
    return Nombre;
  };*/
  return (
    <>
      <div className="App">
        <div className="mainNav">
          <MainNavigator />
        </div>
        <div className="containerPadre">
          <div className="container">
            <div className="headerTableSection">
              <h1 className="titleStyle">Gestion de subgrupos</h1>

              <ButtonIcon
                Image={Images.ADDBLUE}
                Nombre={"Añadir nuevo subgrupo"}
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
                        <th className="titleTable">Grupo</th>
                      </tr>
                    </thead>
                    {datos.map((exa, i) => (
                      <tbody key={i}>
                        <tr>
                          <td>
                            <button
                              className="buttonPrint"
                              onClick={() =>
                                navigate("/view/subgrupo/" + exa._id)
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
                          <td className="containerTable">{exa.Nombre}</td>
                          <td className="containerTable">{exa.GrupoText}</td>
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
                    getLaboratorioCant={getSubGrupoCant}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalRegSubgrupo
        modal={modalShow}
        SetModal={setModalShow}
        callback={() => cargarDatos()}
      />
    </>
  );
};
