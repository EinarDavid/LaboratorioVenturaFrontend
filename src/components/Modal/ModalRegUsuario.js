import { React, useEffect, useRef, useState } from "react";

import {
  getUsuarioTodos,
  postAgregarUsuario,
} from "../../services/usuarioService";
import { useForm } from "react-hook-form";
import Images from "../../config/Images";
import { RegistroUsuario } from "../Forms/RegistroUsuario";
import { ModalConfirmation } from "./ModalConfirmation";

export const RegUsuario = ({ SetModal, modal, callback }) => {
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [disableButtonConfirmation, setDisableButtonConfirmation] = useState(false);
  const [user, setUser] = useState({});
  const {
    register,
    formState,
    formState: { errors, isSubmitSuccessful },
    reset,
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (e) => {
    setDisableButtonConfirmation(true);
    try {
      console.log("entro a Submit", user);
      postAgregarUsuario(user).then(({ data }) => {
        console.log(data);
        reset();

        setDisableButton(false);
        setDisableButtonConfirmation(false);
        SetModal(false);

        if (callback) callback();

        alert(data.mensaje);
        setUser({});

      });
    } catch (error) {
      console.log("----", error);
    }
  };

  const onConfirmation = () => {
    setDisableButton(true);
    console.log("entro a Confirmation");
    setModalConfirmation(true);

  }

  const onCancel = () => {
    console.log("entro a cancel");
    setModalConfirmation(false);
    SetModal(false);
  }

  const handleChangeForm = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };
  //console.log('Error', errors)

  return modal ? (
    <>
      <div className="popup_container">
        <div className="popup_itself">
          <div className="popup_button_container">
            <h1 className="titleStyle">Registro de usuarios</h1>
            <button className="button_close" onClick={() => SetModal(false)}>
              {<img src={Images.CLOSE} width={30} alt="icon"></img>}{" "}
            </button>
          </div>
          <div className="spaceVer20" />

          <RegistroUsuario
            user={user}
            handleSubmit={handleSubmit}
            onSubmit={onConfirmation}
            register={register}
            errors={errors}
            disableButton={disableButton}
            handleChangeForm={handleChangeForm}
          />
        </div>
      </div>

      <ModalConfirmation
        ModalConfirmation={modalConfirmation}
        
        ValueText={"¿Estas seguro de que quieres registrar al usuario?"}
        OnCancel={onCancel}
        OnSubmit={onSubmit}
        DisableButtonConfirmation={disableButtonConfirmation}
      />
    </>
  ) : (
    ""
  );
};
