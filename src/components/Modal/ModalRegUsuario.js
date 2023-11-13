import { React, useEffect, useRef, useState } from "react";

import {
  getUsuarioTodos,
  postAgregarUsuario,
} from "../../services/usuarioService";
import { useForm } from "react-hook-form";
import Images from "../../config/Images";
import { RegistroUsuario } from "../Forms/RegistroUsuario";

export const RegUsuario = ({ SetModal, modal, callback }) => {
  const [disableButton, setDisableButton] = useState(false);
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
    try {
      setDisableButton(true);
      console.log(user);
      postAgregarUsuario(user).then(({ data }) => {
        console.log(data);
        reset();

        setDisableButton(false);
        SetModal(false);
        if (callback) callback();

        alert(data.mensaje);
        setUser({});
        //limpiar cajas, cerrar modal y avisar que fue añadido con exito
      });
    } catch (error) {
      console.log("----", error);
    }
  };
  

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
            onSubmit={onSubmit}
            register={register}
            errors={errors}
            disableButton={disableButton}
            setDisableButton={setDisableButton}
            handleChangeForm={handleChangeForm}
          />
        </div>
      </div>
    </>
  ) : (
    ""
  );
};
