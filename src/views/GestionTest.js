import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonFilter } from "../components/Button/ButtonFilter";
import { ButtonIcon } from "../components/Button/ButtonIcon";
import { RowsSelect } from "../components/Input/RowsSelect";
import { SearchInput } from "../components/Input/SearchInput";
import { SelectFilter } from "../components/Input/SelectFilter";
import { ModalRegTest } from "../components/Modal/ModalRegTest";
import { SectionFilterPac } from "../components/Section/SectionFilterPac";
import { PaginationTable } from "../components/Table/PaginationTable";
import Images from "../config/Images";
import { MainNavigator } from "../navigation/MainNavigator";
import { getExamenCant, getExamenTodos } from "../services/examenService";
import { SectionFilterTest } from "../components/Section/SectionFilterTest";
import { RowsForPage } from "../components/Table/RowsForPage";

export const GestionTest = () => {
  const navigate = useNavigate();

  const [modalShow, setModalShow] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [search, setSearch] = useState({
    Nombre: "",
    CI: "",
    CodigoPaciente: "",
    PrimerApellido: "",
    SegundoApellido: "",
    ord: "",
  });
  const [examenes, setExamenes] = useState([]);
  const [examenesOriginal, setExamenesOriginal] = useState([]);
  const [cantidadPagina, setCantidadPagina] = useState(50);

  console.log("datos search", search);

  useEffect(() => {
    getExamenTodos().then(({ data }) => setExamenesOriginal(data));
  }, []);
  useEffect(() => console.log("Exámenes: ", examenes), [examenes]);

  const FilterOrder = [
    {
      option: "Codigo Ascendente",
      id_option: 1,
    },
    {
      option: "Codigo Descendente",
      id_option: 2,
    },
    {
      option: "Edad Ascendente",
      id_option: 3,
    },
    {
      option: "Edad Descendente",
      id_option: 4,
    },
  ];


  const handleChangeSearch = (event) => {
    //console.log(event.target.value)
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="App">
        <div className="mainNav">
          <MainNavigator />
        </div>
        <div className="containerPadre">
          <div className="container">
          <div className="headerTableSection">
            <h1 className="titleStyle">Gestión de Examenes</h1>
            
            <ButtonIcon
              Image={Images.ADDBLUE}
              Nombre={"Añadir nuevo examen"}
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
                  <SectionFilterTest
                    handleChangeSearch={handleChangeSearch}
                  />
                </div>
                <div className="spaceRow15" />
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
                      <th className="titleTable">Categoría</th>
                      <th className="titleTable">Método</th>
                      <th className="titleTable">Recipiente</th>
                      <th className="titleTable">Muestra</th>
                      <th className="titleTable">Gastos de Insumo</th>
                      <th className="titleTable">Precio de Laboratorio</th>
                    </tr>
                  </thead>
                  {examenes.map((exa, i) => (
                    <tbody key={i}>
                      <tr>
                        <td>
                          <button
                            className="buttonPrint"
                            onClick={() => navigate("/view/examen/" + exa._id)}
                          >
                            <img src={Images.VIEW} width={"25"} alt={"View"} />
                          </button>
                        </td>
                        <td className="containerTable">{i + 1}</td>

                        <td className="containerTable">{exa.Nombre}</td>
                        <td className="containerTable">{exa.Categoria}</td>
                        <td className="containerTable">{exa.Metodo}</td>
                        <td className="containerTable">{exa.Recipiente}</td>
                        <td className="containerTable">{exa.Muestra}</td>
                        <td className="containerTable">{exa.Gastos}</td>
                        <td className="containerTable">{exa.Precio}</td>
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
                  setLaboratorios={setExamenes}
                  laboratoriosOriginal={examenesOriginal}
                  cantidadPagina={cantidadPagina}
                  getLaboratorioCant={getExamenCant}
                />
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
      <ModalRegTest modal={modalShow} SetModal={setModalShow}></ModalRegTest>
    </>
  );
};
