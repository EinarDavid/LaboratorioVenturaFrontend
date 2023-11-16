import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Images from "../../config/Images";
import { postAgregarPaciente } from "../../services/pacienteService";

import { RegistroProducto } from "../Forms/RegistroProducto";
import { RegistroStock } from "../Forms/RegistroStock";
import { postAgregarStock } from "../../services/stockService";
import { ModalConfirmation } from "./ModalConfirmation";

export const ModalRegStock = ({ SetModal, modal, callback }) => {
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [disableButtonConfirmation, setDisableButtonConfirmation] =
    useState(false);
  const [datos, setDatos] = useState({});

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = () => {
    setDisableButtonConfirmation(true);
    try {
 
      postAgregarStock(datos).then(({ data }) => {
        console.log(data);
        reset();
        //Habilitas boton
        setDisableButton(false);
        setDisableButtonConfirmation(false);
        SetModal(false);

        if (callback) callback();
        //limpiar cajas, cerrar modal y avisar que fue añadido con exito
        alert(data.mensaje);
        setDatos({});
      });
    } catch (error) {
      alert(error);
      console.log("----", error);
    }
  };

  const onConfirmation = (data) => {
    //console.log("Datos", data)
    setDatos(data);
    setDisableButton(true);
    console.log("entro a Confirmation");

    setModalConfirmation(true);
  };

  const onCancel = () => {
    console.log("entro a cancel");
    setModalConfirmation(false);
    SetModal(false);
    reset();
  };

  return modal ? (
    <>
      <div className="popup_container">
        <div className="popup_itself">
          <div className="popup_button_container">
            <h1 className="titleStyle">Registro de inventario</h1>
            <button className="button_close" onClick={() => SetModal(false)}>
              {<img src={Images.CLOSE} width={30} alt="icon"></img>}{" "}
            </button>
          </div>
          <div className="spaceVer20" />

          <RegistroStock
            handleSubmit={handleSubmit}
            onSubmit={onConfirmation}
            register={register}
            errors={errors}
            disableButton={disableButton}
          />
        </div>
      </div>
      <ModalConfirmation
        ModalConfirmation={modalConfirmation}
        ValueText={"¿Estas seguro de que quieres registrar el inventario?"}
        OnCancel={onCancel}
        OnSubmit={onSubmit}
        DisableButtonConfirmation={disableButtonConfirmation}
      />
    </>
  ) : (
    ""
  );
};
