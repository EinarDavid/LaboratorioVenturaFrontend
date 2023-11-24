import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonDelete } from "../components/Button/ButtonDelete";

import { RegistroUsuario } from "../components/Forms/RegistroUsuario";

import Images from "../config/Images";

import { ModalConfirmation } from "../components/Modal/ModalConfirmation";
import {
  getStockUno,
  postStockEliminar,
  postStockModificar,
} from "../services/stockService";
import { RegistroStock } from "../components/Forms/RegistroStock";
import { convertDate } from "../services/convertDate";

export const ViewStock = ({ callback }) => {
  const navigate = useNavigate();
  let { id } = useParams();
  //console.log("ID", id);
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [modalConfirmationDelete, setModalConfirmationDelete] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [disableButtonDelete, setDisableButtonDelete] = useState(false);
  const [disableButtonConfirmation, setDisableButtonConfirmation] =
    useState(false);
  const [disableButtonConfirmationDelete, setDisableButtonConfirmationDelete] =
    useState(false);
  const [datos, setDatos] = useState({});

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    control,
    watch,
    getValues,
    setValue,
  } = useForm({
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    name: "Detalle",
    control,

  });

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = () => {
    try {
      //console.log("Entro aqui");
      getStockUno(id).then(({ data }) => {
        console.log("Data-----", data);
        setDatos(data);
        setValue("MontoTotal", data?.MontoTotal);
        setValue("Proveedor", data?.Proveedor);
        setValue("Fecha", data?.Fecha);
        append()
        remove()
        data.Detalle.map((det, i) => {
            
          console.log(i);
          setValue("Detalle." + i + ".Codigo", det.Codigo);
          setValue("Detalle." + i + ".CantidadTotal", det.CantidadTotal);
          setValue("Detalle." + i + ".FechaVencimiento", det.FechaVencimiento);
          setValue("Detalle." + i + ".PrecioCompra", det.PrecioCompra);
        });
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onConfirmation = (data) => {
    console.log("Datos", data);
    setDatos(data);
    setDisableButton(true);
    console.log("entro a Confirmation");

    setModalConfirmation(true);
  };
  const onCancel = () => {
    console.log("entro a cancel");
    setModalConfirmation(false);

    reset();
    navigate("/gestionUsuarios");
  };

  const onConfirmationDelete = () => {
    //console.log("Datos", data)

    setDisableButtonDelete(true);
    console.log("entro a Confirmation");

    setModalConfirmationDelete(true);
  };
  const onCancelDelete = () => {
    console.log("entro a cancel Delete");
    setDisableButtonDelete(false);
    setModalConfirmationDelete(false);
    //reset();
    //navigate("/gestionUsuarios");
  };

  const onSubmit = () => {
    setDisableButtonConfirmation(true);
    try {
      console.log("Datos Enviados", datos);
      postStockModificar(id, datos).then(({ data }) => {
        console.log("Datos BD", data);
        reset();

        setDisableButton(false);
        setDisableButtonConfirmation(false);

        if (callback) callback();

        alert(data.mensaje);
        setDatos({});
        navigate("/gestionStock");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    setDisableButtonConfirmationDelete(true);
    try {
      postStockEliminar(id).then(({ data }) => {
        console.log(data);
        reset();

        setDisableButtonDelete(false);
        setDisableButtonConfirmationDelete(false);

        if (callback) callback();

        alert(data.mensaje);
        navigate("/gestionStock");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="App">
        <div className="mainNav"></div>
        <div className="containerPadre">
          <div className="containerHijo">
            <div className="containerHeaderButtons">
              <div className="navTitleContainer">
                <button
                  className="button_close"
                  onClick={() => navigate("/gestionStock")}
                >
                  {<img src={Images.ARROWLEFT} width={30} alt="icon"></img>}
                </button>
                <div className="spaceRow10" />
                <h1 className="titleStyle">Detalle del inventario</h1>
                
              </div>

              <div className="containerButtonRight">
                <ButtonDelete
                  Nombre={"ELIMINAR"}
                  Disabled={disableButtonDelete}
                  OnClick={onConfirmationDelete}
                />
              </div>
            </div>

            <div className="spaceVer20" />
            <p> {datos?.MontoTotal}  </p>
            <p> {convertDate(datos?.Fecha)}  </p>

            <RegistroStock
              handleSubmit={handleSubmit}
              onSubmit={onConfirmation}
              register={register}
              errors={errors}
              disableButton={disableButton}
              fields={fields}
              append={append}
              remove={remove}
              watch={watch}
            />
          </div>
        </div>
      </div>
      <ModalConfirmation
        ModalConfirmation={modalConfirmation}
        ValueText={"¿Estas seguro de que quieres modificar al usuario?"}
        OnCancel={onCancel}
        OnSubmit={onSubmit}
        DisableButtonConfirmation={disableButtonConfirmation}
      />
      <ModalConfirmation
        ModalConfirmation={modalConfirmationDelete}
        ValueText={"¿Estas seguro de que quieres eliminar al usuario?"}
        OnCancel={onCancelDelete}
        OnSubmit={handleDelete}
        DisableButtonConfirmation={disableButtonConfirmationDelete}
      />
    </>
  );
};
