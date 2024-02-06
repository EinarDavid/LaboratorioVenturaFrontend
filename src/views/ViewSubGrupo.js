import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonDelete } from "../components/Button/ButtonDelete";

import Images from "../config/Images";

import { ModalConfirmation } from "../components/Modal/ModalConfirmation";

import {
  getSubGrupoUno,
  postSubGrupoEliminar,
  postSubGrupoModificar,
} from "../services/subgrupoService";
import { RegistroSubgrupo } from "../components/Forms/RegistroSubgrupo";
import { getGrupoTodos } from "../services/grupoService";

export const ViewSubGrupo = ({ callback }) => {
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
  const [grupo, setGrupo] = useState()

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
      getSubGrupoUno(id).then(({ data }) => {
        //console.log("Data-----", data);
        setDatos(data);
        setValue("Nombre", data?.Nombre);
        setValue("Grupo", data?.Grupo);
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
    navigate("/gestionSubgrupo");
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
  };

  const onSubmit = () => {
    setDisableButtonConfirmation(true);
    try {
      console.log("Datos Enviados", datos);
      postSubGrupoModificar(id, datos).then(({ data }) => {
        console.log("Datos BD", data);
        reset();

        setDisableButton(false);
        setDisableButtonConfirmation(false);

        if (callback) callback();

        alert(data.mensaje);
        setDatos({});
        navigate("/gestionSubgrupo");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = () => {
    setDisableButtonConfirmationDelete(true);
    try {
      postSubGrupoEliminar(id).then(({ data }) => {
        console.log(data);
        reset();

        setDisableButtonDelete(false);
        setDisableButtonConfirmationDelete(false);

        if (callback) callback();

        alert(data.mensaje);
        navigate("/gestionSubgrupo");
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGrupoTodos().then(({data}) => {
      console.log("Grupo---", data)
        setGrupo(data);
    })
  }, [])
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
                  onClick={() => navigate("/gestionSubgrupo")}
                >
                  {<img src={Images.ARROWLEFT} width={30} alt="icon"></img>}
                </button>
                <div className="spaceRow10" />
                <h1 className="titleStyle">Información del subgrupo</h1>
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

            <RegistroSubgrupo
              handleSubmit={handleSubmit}
              onSubmit={onConfirmation}
              register={register}
              errors={errors}
              disableButton={disableButton}
              Grupo={grupo}
            />
          </div>
        </div>
      </div>
      <ModalConfirmation
        ModalConfirmation={modalConfirmation}
        ValueText={"¿Estas seguro de que quieres modificar el Subgrupo?"}
        OnCancel={onCancel}
        OnSubmit={onSubmit}
        DisableButtonConfirmation={disableButtonConfirmation}
      />
      <ModalConfirmation
        ModalConfirmation={modalConfirmationDelete}
        ValueText={"¿Estas seguro de que quieres eliminar el Subgrupo?"}
        OnCancel={onCancelDelete}
        OnSubmit={handleDelete}
        DisableButtonConfirmation={disableButtonConfirmationDelete}
      />
    </>
  );
};
