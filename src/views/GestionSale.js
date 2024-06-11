import React, { useEffect, useState } from "react";
import { MainNavigator } from "../navigation/MainNavigator";

import Images from "../config/Images";

import { ButtonFilter } from "../components/Button/ButtonFilter";
import { SelectFilter } from "../components/Input/SelectFilter";
import { ButtonIcon } from "../components/Button/ButtonIcon";

import { useNavigate } from "react-router-dom";
import { PaginationTable } from "../components/Table/PaginationTable";
import { RowsSelect } from "../components/Input/RowsSelect";
import { RegUsuario } from "../components/Modal/ModalRegUsuario";

import { SectionFilterSale } from "../components/Section/SectionFilterSale";
import {
  getVentaCant,
  getVentaTodos,
  postVentaBuscar,
} from "../services/saleService";

import { convertDate } from "../services/convertDate";

export const GestionSale = () => {
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [activeButton, setActiveButton] = useState(false);
  const [search, setSearch] = useState({
    NIT: "",
    Nombre: "",
    FechaCompra: "",
    Total: "",
    ord: "",
  });
  const [datos, setDatos] = useState([]);
  const [dataOriginal, setDataOriginal] = useState([]);
  const [cantidadPagina, setCantidadPagina] = useState(20);

  useEffect(() => {
    getVentaTodos().then(({ data }) => setDataOriginal(data));
  }, []);

  const handleChangeSearch = (event) => {
    setSearch({ ...search, [event.target.name]: event.target.value });
  };

  const cargarDatos = () => {
    try {
      postVentaBuscar(search).then(({ data }) => {
        setDataOriginal(data);
        console.log("data", data);
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
          <MainNavigator></MainNavigator>
        </div>
        <div className="containerPadre">
          <div className="headerTableSection">
            <h1 className="titleStyle">Gestion de ventas</h1>
            <div className="spaceVer10" />
            <ButtonIcon
              Image={Images.ADDBLUE}
              Nombre={"Añadir nueva venta"}
              OnClick={() => navigate("/newSale")}
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
                  <SectionFilterSale handleChangeSearch={handleChangeSearch} />
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
                      <th className="titleTable">Cliente</th>
                      <th className="titleTable">Razón social</th>
                      <th className="titleTable">Correo electrónico</th>

                      <th className="titleTable">NIT</th>
                      <th className="titleTable">Fecha de compra</th>
                      <th className="titleTable">Tipo de Pago</th>
                      <th className="titleTable">Total</th>
                    </tr>
                  </thead>
                  {datos.map((venta, i) => (
                    <tbody key={i}>
                      <tr className="pacTable">
                        <td>
                          {/* <button
                            className="buttonPrint"
                            onClick={() => navigate("/view/user/" + venta?._id)}
                          >
                            <img src={Images.VIEW} width={"25"} alt={"View"} />
                          </button> */}
                        </td>
                        <td className="containerTable">{i + 1}</td>
                        <td className="containerTable">{venta?.Cliente}</td>
                        <td className="containerTable">
                          {venta?.Facturacion.RazonSocial}
                        </td>
                        <td className="containerTable">
                          {venta?.Facturacion.Email}
                        </td>
                        <td className="containerTable">
                          {venta?.Facturacion.NIT}
                        </td>
                        <td className="containerTable">
                          {convertDate(venta?.Fecha)}
                        </td>
                        <td className="containerTable">{venta?.TipoPago}</td>
                        <td className="containerTable">{venta?.PrecioTotal}</td>
                      </tr>
                     
                      <tr>
                        <th></th>
                        <th className="titleTable">Nro</th>
                        <th className="titleTable">Producto</th>
                        <th className="titleTable">Cantidad</th>
                        <th className="titleTable">Precio</th>
                        <th className="titleTable">Total</th>
                      </tr>
                      {venta.Producto ? (
                        venta.Producto.map((product, i) => (
                          <>
                            <tr>
                              <td></td>
                              <td className="containerTable">{i + 1}</td>
                              <td className="containerTable">{product?._id}</td>
                              <td className="containerTable">
                                {product?.Cantidad}
                              </td>
                              <td className="containerTable">
                                {product?.PrecioVenta}
                              </td>
                              <td className="containerTable">
                                {product?.Total}
                              </td>
                            </tr>
                          </>
                        ))
                      ) : (
                        <></>
                      )}
                    
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
                  getLaboratorioCant={getVentaCant}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <RegUsuario
        modal={modalShow}
        SetModal={setModalShow}
        callback={() => cargarDatos()}
      ></RegUsuario>
    </>
  );
};
