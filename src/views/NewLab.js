import React, { useEffect, useState } from "react";
import { SearchInput } from "../components/Input/SearchInput";
import { ModalRegPaciente } from "../components/Modal/ModalRegPaciente";
import { MainNavigator } from "../navigation/MainNavigator";
import { getPacientesNombres } from "../services/pacienteService";
import { getExamenTodos } from "../services/examenService";
import { postAgregarLaboratorio } from "../services/laboratorioService";

import { TextInputDinamic } from "../components/Input/TextInputDinamic";
import { ModalRegTest } from "../components/Modal/ModalRegTest";

import Images from "../config/Images";
import { ButtonPrimary } from "../components/Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import { calcularEdad } from "../services/calcEdad";
import { EmptySearch } from "../components/Empty/EmptySearch";
import { SelectDinamic } from "../components/Input/SelectDinamic";
import { ButtonPrimary100 } from "../components/Button/ButtonPrimary100";

export const NewLab = () => {
  const navigate = useNavigate();

  const [disableButton, setDisableButton] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [pacienteFinded, setPacienteFinded] = useState({});
  const [examenes, setExamenes] = useState([]);
  const [examenFinded, setExamenFinded] = useState([]);
  const [exameneSelected, setExameneSelected] = useState([]);
  const [pacienteSelected, setPacienteSelected] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalShowRegtest, setModalShowRegtest] = useState(false);
  const [detalle, setDataDetalle] = useState();

  const [render, setRender] = useState(true);

  // console.log("PAC:", pacienteSelected);

  const llamarPacientes = () =>
    getPacientesNombres().then(({ data }) => setPacientes(data));
  const llamarExamenes = () =>
    getExamenTodos().then(({ data }) => setExamenes(data));
  useEffect(() => {
    llamarPacientes();
    llamarExamenes();
  }, []);

  const fecha = new Date();
  const a = fecha.getFullYear();
  const m = fecha.getMonth() + 1;
  const d = fecha.getDate();
  const fechaActual = `${d}-${m}-${a}`;

  const _onSubmit = () => {
    if (pacienteSelected && exameneSelected[0]) {
      setDisableButton(true);
      let laboratorio = {
        examenes: exameneSelected,
        paciente: pacienteSelected,
        motivo: detalle?.Motivo,
        Fecha: fechaActual,
      };
      postAgregarLaboratorio(laboratorio).then(({ data }) => {
        console.log(data);
        alert(data.mensaje);
        setRender(!render);
        setPacienteFinded([]);
        setExamenFinded([]);
        setExameneSelected([]);
        setPacienteSelected([]);
        setDisableButton(false);

        //limpiar cajas, cerrar modal y avisar que fue añadido con exito
      });
    } else {
      alert("Selecciona un paciente y examenes a realizar");
    }
  };
  const handleChangeNombre = (event) => {
    setDataDetalle({ ...detalle, [event.target.name]: event.target.value });
  };

  const FormadePago = [
    {
      option: "Efectivo",
      id_option: 1,
    },
    {
      option: "Tarjeta Debito/Crédito",
      id_option: 2,
    },
    {
      option: "Transferencia",
      id_option: 3,
    },
    {
      option: "Cheque",
      id_option: 4,
    },
  ];

  return (
    <>
      <div className="App" key={render}>
        <div className="mainNav">
          <MainNavigator />
        </div>
        <div className="containerPadre">
          <div className="sections">
            <div className="section1Lab">
              <div className="headerTableSection">
                <h1 className="titleStyle">Nuevo Laboratorio</h1>
                <div className="spaceVer20" />
                <div className="containerPacDoc">
                  <div className="selectPac">
                    <SearchInput
                      LabelInput={"Carnet del paciente"}
                      Placeholder={"Ej. 9367431"}
                      Image={Images.ADD}
                      onClick={() => setModalShow(true)}
                      Data={pacientes}
                      Key={"CI"}
                      // Find={(finded) => {
                      //                           if (finded[0]) setPacienteFinded(finded[0]);
                      //                           else setPacienteFinded({});
                      //                       }}

                      Find={(finded) => {
                        setPacienteFinded(finded);
                      }}
                    ></SearchInput>
                    {pacienteFinded.length > 0 ? (
                      <div className="containerResultados">
                        {pacienteFinded.map((ex, i) => (
                          <div className="resultadosSearch" key={i}>
                            <button
                              className="buttonTable"
                              onClick={() => {
                                setPacienteSelected(ex);
                                setPacienteFinded([]);
                              }}
                            >
                              <img
                                src={Images.ADDBLUE}
                                width={30}
                                height={30}
                                alt={"icon"}
                              ></img>

                              <p className="labelInput">
                                Nombre: {ex.NombreCompleto}
                              </p>
                              <div className="spaceRow10" />
                              <p className="labelInput">CI: {ex.CI}</p>
                            </button>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                    <div className="spaceVer10" />
                    {pacienteSelected.length !== 0 ? (
                      <section className="information">
                        {console.log("pacienteeeeee", pacienteSelected)}
                        <p className="labelInput">
                          <strong>Código</strong>:{" "}
                          {pacienteSelected.CodigoPaciente}
                        </p>
                        <p className="labelInput">
                          <strong>CI</strong>: {pacienteSelected.CI}
                        </p>
                        <p className="labelInput">
                          {" "}
                          <strong>Paciente</strong>:{" "}
                          {pacienteSelected.NombreCompleto}
                        </p>
                        <p className="labelInput">
                          <strong>Edad</strong>:{" "}
                          {calcularEdad(pacienteSelected.Fecha_de_Nacimiento)}
                        </p>
                      </section>
                    ) : (
                      <EmptySearch
                        Image={Images.SEARCHBLUE}
                        Text={"Escribe en número de C.I."}
                        Width={40}
                      />
                    )}
                  </div>
                  <div className="spaceRow20" />
                  <div className="selectDoc">
                    <EmptySearch
                      Image={Images.CONTRUCTION}
                      Text={"Sección en construcción"}
                      Width={60}
                    />
                  </div>
                </div>
                <div className="spaceVer20" />
                <h2 className="titleStyleH2">Examenes</h2>
                <div className="spaceVer15" />
                <SearchInput
                  LabelInput={"Ingresa el nombre del Examen*"}
                  Placeholder={"Ej. Inmunologia"}
                  Image={Images.ADD}
                  onClick={() => setModalShowRegtest(true)}
                  Data={examenes}
                  Key={"Nombre"}
                  Find={(finded) => {
                    setExamenFinded(finded);
                  }}
                ></SearchInput>

                {examenFinded.length > 0 ? (
                  <div className="containerResultados">
                    {examenFinded.map((ex, i) => (
                      <div className="resultadosSearch" key={i}>
                        <button
                          className="buttonTable"
                          onClick={() => {
                            if (
                              !exameneSelected.find((a) => a._id === ex._id)
                            ) {
                              setExameneSelected([...exameneSelected, ex]);
                              setExamenFinded([]);
                            }
                          }}
                        >
                          <img
                            src={Images.ADDBLUE}
                            width={30}
                            height={30}
                            alt={"icon"}
                          ></img>

                          <p className="labelInput">Nombre: {ex.Nombre}</p>
                          <div className="spaceRow10" />
                          <p className="labelInput">
                            Categoria: {ex.Categoria}
                          </p>
                          <div className="spaceRow10" />
                          <p className="labelInput">Método: {ex.Metodo}</p>
                          <div className="spaceRow10" />
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <div className="cardBody">
                {exameneSelected.length !== 0 ? (
                  <>
                    <div className="cardBodyEvaluation">
                      <div className="divTable">
                        <table className="tableContainer">
                          <thead>
                            <tr>
                              <th className="titleTable">Nro</th>
                              <th className="titleTable">Nombre</th>
                              <th className="titleTable">Categoria</th>
                              <th className="titleTable">Metodo</th>
                            </tr>
                          </thead>

                          <tbody>
                            {exameneSelected.map((ex, i) => (
                              <tr key={i} className="trTable">
                                <td className="containerTable">{i + 1}</td>
                                <td className="containerTable">{ex.Nombre}</td>
                                <td className="containerTable">
                                  {ex.Categoria}
                                </td>
                                <td className="containerTable">{ex.Metodo}</td>
                                <td>
                                  <button
                                    className="buttonDeleteTable"
                                    onClick={() => {
                                      setExameneSelected(
                                        exameneSelected.filter(
                                          (a) => a._id !== ex._id
                                        )
                                      );
                                    }}
                                  >
                                    <img
                                      src={Images.DELETE}
                                      width={30}
                                      height={30}
                                      alt={"icon"}
                                    ></img>
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="containerEmptyTable">
                    <EmptySearch
                      Image={Images.SEARCHBLUE}
                      Text={"Aquí aparecerán los exámenes que agregues"}
                      Width={80}
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="section2Lab">
              <div className="containerLab2">
                <h2 className="titleStyleH2">Datos adicionales</h2>
                <div className="spaceVer10" />
                <TextInputDinamic
                  Name={"FechaDeEntrega"}
                  LabelInput={"Fecha de entrega"}
                  Placeholder={"Ej. 10/10/2023"}
                  OnChange={(e) => handleChangeNombre(e)}
                  value={""}
                />
                <div className="spaceVer10" />
                <TextInputDinamic
                  Name={"Motivo"}
                  LabelInput={"Motivo"}
                  Placeholder={"Ej. Examen anual"}
                  OnChange={(e) => handleChangeNombre(e)}
                  value={""}
                />
              </div>

              <div className="spaceVer10" />
              <hr className="lineFilterWhite" />
              <div className="spaceVer10" />

              <div className="containerLab2">
                <h2 className="titleStyleH2">Método de pago</h2>
                <div className="spaceVer10" />
                <h3 className="titleStyleH3">Datos de facturación</h3>
                <div className="spaceVer10" />
                {
                  <>
                    <p className="labelInputSPadding">
                      <strong>Razón social</strong>:{" "}
                      {pacienteSelected.RazonSocial}
                    </p>
                    <div className="spaceVer5" />
                    <p className="labelInputSPadding">
                      <strong>Email</strong>: {pacienteSelected.Email}
                    </p>
                    <div className="spaceVer5" />
                    <p className="labelInputSPadding">
                      <strong>NIT</strong>: {pacienteSelected.NIT}
                    </p>
                  </>
                }
                <div className="spaceVer10" />
                <div className="SaldoTotal">
                  <p className="titleStyleH3">Saldo</p>
                  <p className="BSFacturacion">Bs. 20</p>
                </div>
                <div className="spaceVer10" />
                <SelectDinamic
                  Name={"FormaDePago"}
                  LabelInput={"Forma de pago*"}
                  Placeholder={"Selecciona"}
                  SelectOption={FormadePago}
                  OnChange={(e) => handleChangeNombre(e)}
                  //Value={det.SubCategoria || ""}
                />
                <div className="spaceVer10" />
                <TextInputDinamic
                  Name={"TotalPagado"}
                  LabelInput={"Total pagado"}
                  Placeholder={"Ej. 100 Bs"}
                  OnChange={(e) => handleChangeNombre(e)}
                  value={""}
                />
                <div className="ContainerCheck">
                  <label className="labelInputCheck">
                    <input
                      className="checkbookInput"
                      type="checkbox"
                      name="PagarTodo"
                      onChange={(e) => handleChangeNombre(e)}
                    />
                    Pagar todo
                  </label>
                  <div className="spaceRow10" />
                  <label className="labelInputCheck">
                    <input
                      className="checkbookInput"
                      type="checkbox"
                      name="Cotizacion"
                      value="Cotización"
                      onChange={(e) => handleChangeNombre(e)}
                    />
                    Registrar como cotización
                  </label>
                </div>

                <div className="spaceVer15" />

                <ButtonPrimary100
                  Nombre={"REGISTRAR"}
                  Disabled={disableButton}
                  OnClick={_onSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalRegPaciente
        modal={modalShow}
        SetModal={setModalShow}
        callback={llamarPacientes}
      ></ModalRegPaciente>
      <ModalRegTest
        modal={modalShowRegtest}
        SetModal={setModalShowRegtest}
        callback={llamarExamenes}
      />
    </>
  );
};
