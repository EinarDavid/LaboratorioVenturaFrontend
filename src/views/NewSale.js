import React, { useEffect, useState } from "react";
import { SearchInput } from "../components/Input/SearchInput";
import { ModalRegProduct } from "../components/Modal/ModalRegProduct";
import { MainNavigator } from "../navigation/MainNavigator";
import { getPacientesNombres } from "../services/pacienteService";
import { getExamenTodos } from "../services/examenService";
import { postAgregarVenta } from "../services/saleService";

import { TextInputDinamic } from "../components/Input/TextInputDinamic";
import { ModalRegPaciente } from "../components/Modal/ModalRegPaciente";

import Images from "../config/Images";
import { ButtonPrimary } from "../components/Button/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import { calcularEdad } from "../services/calcEdad";
import { EmptySearch } from "../components/Empty/EmptySearch";
import { SelectDinamic } from "../components/Input/SelectDinamic";
import { ButtonPrimary100 } from "../components/Button/ButtonPrimary100";
import { getProductTodos } from "../services/productService";
import { ModalConfirmation } from "../components/Modal/ModalConfirmation";
import { SearchProduct } from "../components/Input/SearchProduct";

export const NewSale = () => {
  const navigate = useNavigate();

  const [disableButton, setDisableButton] = useState(false);
  const [pacientes, setPacientes] = useState([]);
  const [pacienteFinded, setPacienteFinded] = useState({});
  const [producto, setProducto] = useState([]);
  const [examenFinded, setExamenFinded] = useState([]);
  const [productSelect, setExameneSelected] = useState([]);
  const [pacienteSelected, setPacienteSelected] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [modalShowRegtest, setModalShowRegtest] = useState(false);
  const [dataFacturacion, setDataFacturacion] = useState();
  const [sumTotal, setSumTotal] = useState([]);
  const [descuento, setDescuento] = useState([]);
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [disableButtonConfirmation, setDisableButtonConfirmation] =useState(false);
  
  const [render, setRender] = useState(true);

  // console.log("PAC:", pacienteSelected);

  const llamarPacientes = () =>
    getPacientesNombres().then(({ data }) => setPacientes(data));
  const llamarExamenes = () =>
    getProductTodos().then(({ data }) => {
      setProducto(data);
    });
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
    if (pacienteSelected && productSelect[0]) {
      //setDisableButton(true);
      
      let datos = {
        Producto: productSelect,
        Cliente: pacienteSelected,
        Descuento_Ganancia: descuento,
        Fecha: fechaActual,
        PrecioTotal: sumTotal,
        Facturacion: dataFacturacion
      };
      console.log("Datos enviados",datos)
      postAgregarVenta(datos).then(({ data }) => {
        console.log(data);
        alert(data.mensaje);
        setRender(!render);
        setPacienteFinded([]);
        setExamenFinded([]);
        setExameneSelected([]);
        setPacienteSelected([]);
        setDisableButton(false);
        setDisableButtonConfirmation(false);
        setModalConfirmation(false);
        //limpiar cajas, cerrar modal y avisar que fue añadido con exito
      });
    } else {
      alert("Selecciona un cliente y producto");
    }
  };
  const handleChangeNombre = (event) => {
    setDataFacturacion({ ...dataFacturacion, [event.target.name]: event.target.value });
  };

  const FormadePago = [
    {
      option: "Efectivo",
      id_option: 1,
    },
    {
      option: "Qr",
      id_option: 2,
    },
    {
      option: "Tarjeta Debito/Crédito",
      id_option: 3,
    },
    {
      option: "Transferencia",
      id_option: 4,
    },
    {
      option: "Cheque",
      id_option: 5,
    },
  ];
  const _CalcularTotal = (PrecioVenta, id, e, Invetario) => {
    //console.log('as', e.target.value, Invetario);
    var ErrorMessage = "";

    if(Number(e.target.value) > Invetario){
      ErrorMessage = "Tu invetario actual es de: " + Invetario
    }
    var Total = PrecioVenta * Number(e.target.value);

    const nuevoArreglo = productSelect.map((elemento) => {
      if (elemento._id === id) {
        return {
          ...elemento,
          Total: Total,
          Cantidad: e.target.value,
          PrecioVenta: PrecioVenta,
          ErrorMessage: ErrorMessage
        };
      }
      return elemento;
    });

    setExameneSelected(nuevoArreglo);
  };
  const _CalcularTotal2 = (Cantidad, id, e) => {
    //console.log( e.target)
    //console.log('cantidad',Cantidad, e.target.value);

    var Total = Cantidad * Number(e.target.value);

    const nuevoArreglo = productSelect.map((elemento) => {
      if (elemento._id === id) {
        return {
          ...elemento,
          Total: Number(Total),
          Cantidad: Number(Cantidad),
          PrecioVenta: Number(e.target.value),
        };
      }
      return elemento;
    });
    setExameneSelected(nuevoArreglo);
  };

  const _Sumtotal = () => {
    var suma = 0;
    productSelect.map((data) => {
      console.log("Data", data?.Total)
      suma = suma + Number(data?.Total);
      console.log("Sum",suma)
    });
    setSumTotal(suma);
  };

  useEffect(() => {
    _Sumtotal();
    _DescuentoTotal();
  }, [productSelect]);

  const _DescuentoTotal = () => {
    var descuento = 0;
    productSelect.map((data) => {
      descuento += Number(data?.PrecioVenta) - Number(data?.PrecioOriginal);
      //console.log(data?.PrecioOriginal, data?.PrecioVenta, descuento);
      //descuento = descuento * -1
      //console.log(data)
    });
    setDescuento(descuento);
  };
  const onConfirmation = (data) => {
    //console.log("Datos", data)
    //setDatos(data);
    setDisableButton(true);
    console.log("entro a Confirmation");

    setModalConfirmation(true);
  };

  const onCancel = () => {
    console.log("entro a cancel");
    setModalConfirmation(false);
    
  };

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
                <h1 className="titleStyle">Nueva Venta</h1>
                <div className="containerPacDoc">
                  <div className="selectPac">
                    <SearchInput
                      LabelInput={"Carnet del cliente"}
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
                                var facturacion = {
                                  RazonSocial: ex.RazonSocial,
                                  NIT: ex.NIT,
                                  Email: ex.Email
                                }
                                setDataFacturacion(facturacion)
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
                 
                    {pacienteSelected.length !== 0 ? (
                      <section className="information">
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
                 
                  <div className="selectDoc">
                    <EmptySearch
                      Image={Images.CONTRUCTION}
                      Text={"Sección en construcción"}
                      Width={60}
                    />
                  </div>
                </div>
              
              <div className="SearchProduct">
              <h2 className="titleStyleH2">Productos</h2>
              <div className="spaceVer10" />
                <SearchProduct
                  LabelInput={"Ingresa el nombre del Producto*"}
                  Placeholder={"Ej. Paracetamol"}
                  Image={Images.ADD}
                  onClick={() => setModalShowRegtest(true)}
                  Data={producto}
                  Key={"Nombre"}
                  Find={(finded) => {
                    setExamenFinded(finded);
                  }}
                ></SearchProduct>

                {examenFinded.length > 0 ? (
                  <div className="containerResultados">
                    {examenFinded.map((ex, i) => (
                      <div className="resultadosSearch" key={i}>
                        <button
                          className="buttonTable"
                          onClick={() => {
                            if (!productSelect.find((a) => a._id === ex._id)) {
                              setExameneSelected([
                                ...productSelect,
                                {
                                  ...ex,
                                  PrecioVenta:ex.PrecioVenta.replace(',','.'),
                                  Total: ex.PrecioVenta.replace(',','.'),
                                  PrecioOriginal: ex.PrecioVenta.replace(',','.'),
                                  Cantidad: 1
                                },
                              ]);
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
                          <p className="labelInput">Código: {ex.Codigo}</p>
                          <div className="spaceRow10" />
                          <p className="labelInput">
                            Precio de Venta: {ex.PrecioVenta}
                          </p>
                          <div className="spaceRow10" />
                          <p className="labelInput">
                            Proveedor: {ex.Proveedor}
                          </p>
                          <div className="spaceRow10" />
                          <p className="labelInput">
                            Codigo de Barras: {ex.CodigoBarras}
                          </p>
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <></>
                )}
              </div>
                
              </div>

              <div className="cardBody">
                {productSelect.length !== 0 ? (
                  <>
                    <div className="cardBodyEvaluation">
                      <div className="divTable">
                        <table className="tableContainer">
                          <thead>
                            <tr>
                              <th className="titleTable">Nro</th>
                              <th className="titleTable">Nombre</th>
                              <th className="titleTable">Codigo</th>
                              <th className="titleTable">Precio Unitario</th>
                              <th className="titleTable">Cantidad</th>
                              <th className="titleTable">Total (Bs)</th>
                            </tr>
                          </thead>

                          <tbody>
                            {productSelect.map((ex, i) => (
                              <tr key={i} className="trTable">
                                <td className="containerTable">{i + 1}</td>
                                <td className="containerTable">{ex.Nombre}</td>
                                <td className="containerTable">{ex.Codigo}</td>
                                <td className="containerTable">
                                  <TextInputDinamic
                                    Placeholder={"Precio Unitario"}
                                    OnChange={(e) => {
                                      _CalcularTotal2(
                                        ex.Cantidad ? ex.Cantidad : 1,
                                        ex._id,
                                        e
                                      );
                                    }}
                                    Value={Number(ex.PrecioVenta)}
                                  />
                                  Precio Original: {ex.PrecioOriginal}
                                </td>
                                <td className="containerTable">
                                  <TextInputDinamic
                                    Name={"Cantidad"}
                                    //LabelInput={"Cantidad"}
                                    Placeholder={"Ej. 1"}
                                    OnChange={(e) =>
                                      _CalcularTotal(ex.PrecioVenta, ex._id, e, ex.InventarioActual)
                                    }
                                    Value={1}
                                    ErrorInput = {ex.ErrorMessage}
                                  />
                                </td>
                                <td className="containerTable">
                                  {" "}
                                  Total: {ex.Total}
                                </td>
                                <td>
                                  <button
                                    className="buttonDeleteTable"
                                    onClick={() => {
                                      setExameneSelected(
                                        productSelect.filter(
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
                <div className="Facturacion">
                  <h3 className="titleStyleH2">Datos de facturación</h3>

                  {
                    <div className="Datos">
                      <TextInputDinamic
                      Name={"RazonSocial"}
                      LabelInput={"Razón social"}
                      Placeholder={"Ej. Villarroel"}
                      OnChange={(e)=> handleChangeNombre(e)}
                      Value={pacienteSelected.RazonSocial}
                      />
                      <TextInputDinamic
                      Name={"Email"}
                      LabelInput={"Correo electrónico"}
                      Placeholder={"Ej. Villarroel@gmail.com"}
                      OnChange={(e)=> handleChangeNombre(e)}
                      Value={pacienteSelected.Email}
                      />
                      <TextInputDinamic
                      Name={"NIT"}
                      LabelInput={"NIT"}
                      Placeholder={"Ej. 9367493"}
                      OnChange={(e)=> handleChangeNombre(e)}
                      Value={pacienteSelected.NIT}
                      />

                      {/* <p className="labelInputSPadding">
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
                      </p> */}
                    </div>
                  }
                  <h2 className="titleStyleH2">Método de pago</h2>

                  <div className="SaldoTotal">
                    <p className="titleStyleH3">Total</p>
                    <p className="BSFacturacion">Bs. {sumTotal}</p>
                  </div>

                  <TextInputDinamic
                    Disabled={true}
                    Name={"Descuento_Ganancia"}
                    LabelInput={"Descuento/Ganancia"}
                    Placeholder={"Ej. 10 Bs"}
                    //OnChange={(e) => handleChangeNombre(e)}
                    Value={descuento}
                  />
                  <SelectDinamic
                  Name={"FormaDePago"}
                  LabelInput={"Forma de pago*"}
                  Placeholder={"Selecciona"}
                  SelectOption={FormadePago}
                  OnChange={(e) => handleChangeNombre(e)}
                  //Value={det.SubCategoria || ""}
                />
                </div>

                <div className="FooterButton">
                  <ButtonPrimary100
                    Nombre={"REALIZAR VENTA"}
                    Disabled={disableButton}
                    OnClick={onConfirmation}
                  />
                </div>
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

      <ModalRegProduct
        modal={modalShowRegtest}
        SetModal={setModalShowRegtest}
        callback={llamarExamenes}
      />

      <ModalConfirmation
      ModalConfirmation={modalConfirmation}
      ValueText={"¿Estas seguro de que quieres reaizar la venta?"}
      OnCancel={onCancel}
      OnSubmit={_onSubmit}
      DisableButtonConfirmation={disableButtonConfirmation}
      />
    </>
  );
};
