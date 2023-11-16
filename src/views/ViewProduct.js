import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonDelete } from "../components/Button/ButtonDelete";

import { RegistroUsuario } from "../components/Forms/RegistroUsuario";

import Images from "../config/Images";

import { ModalConfirmation } from "../components/Modal/ModalConfirmation";
import {
  getProductUno,
  postProductEliminar,
  postProductModificar,
} from "../services/productService";

export const ViewProduct = ({ callback }) => {
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
    setValue,
  } = useForm({
    mode: "all",
  });

  useEffect(() => {
    cargarDatos();
  }, []);

  const cargarDatos = () => {
    try {
      //console.log("Entro aqui");
      getProductUno(id).then(({ data }) => {
        //console.log("Data-----", data);
        setDatos(data);
        setValue("Codigo", data?.Codigo);
        setValue("Nombre", data?.Nombre);
        setValue("UnidadMedida", data?.UnidadMedida);
        setValue("Descripcion", data?.Descripcion);
        setValue("Proveedor", data?.Proveedor);
        setValue("CodigoBarras", data?.CodigoBarras);
        setValue("GrupoFamilia", data?.GrupoFamilia);
        setValue("SubGrupo", data?.SubGrupo);
        setValue("Ubicacion", data?.Ubicacion);
        setValue("PrecioCompra", data?.PrecioCompra);
        setValue("Utilidad", data?.Utilidad);
        setValue("PrecioVenta", data?.PrecioVenta);
        setValue("InventarioMinimo", data?.InventarioMinimo);
        setValue("FechaVencimiento", data?.FechaVencimiento);
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
      postProductModificar(id, datos).then(({ data }) => {
        console.log("Datos BD", data);
        reset();

        setDisableButton(false);
        setDisableButtonConfirmation(false);

        if (callback) callback();

        alert(data.mensaje);
        setDatos({});
        navigate("/gestionUsuarios");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    setDisableButtonConfirmationDelete(true);
    try {
      postProductEliminar(id).then(({ data }) => {
        console.log(data);
        reset();

        setDisableButtonDelete(false);
        setDisableButtonConfirmationDelete(false);

        if (callback) callback();

        alert(data.mensaje);
        navigate("/gestionUsuarios");
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
                  onClick={() => navigate("/gestionUsuarios")}
                >
                  {<img src={Images.ARROWLEFT} width={30} alt="icon"></img>}
                </button>
                <div className="spaceRow10" />
                <h1 className="titleStyle">Información del producto</h1>
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

            <RegistroUsuario
              handleSubmit={handleSubmit}
              onSubmit={onConfirmation}
              register={register}
              errors={errors}
              disableButton={disableButton}
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
