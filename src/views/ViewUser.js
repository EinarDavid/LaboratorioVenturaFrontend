import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonDelete } from "../components/Button/ButtonDelete";

import { RegistroUsuario } from "../components/Forms/RegistroUsuario";

import Images from "../config/Images";
import {
  getPacienteUno,
  postPacienteEliminar,
  postPacienteModificar,
} from "../services/pacienteService";

export const ViewUser = () => {
  const navigate = useNavigate();
  let { idPaciente } = useParams();

  const [disableButton, setDisableButton] = useState(false);
  const [disableButtonDelete, setDisableButtonDelete] = useState(false);
  const [paciente, setPaciente] = useState({});

  const {
    register,
    formState,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const llamarPaciente = () =>
    getPacienteUno(idPaciente).then(({ data }) => setPaciente(data));

  useEffect(() => {
    llamarPaciente();
    console.log("llamandooo", paciente);
  }, []);

  //const [cabecera, setCabecera] = useState({});
  const handleChangeForm = (event) => {
    setPaciente({ ...paciente, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    console.log("Datos Enviados", paciente);
    setDisableButton(true);
    postPacienteModificar(idPaciente, paciente).then(({ data }) => {
      console.log("Datos BD", data);
      alert(data.mensaje);
      navigate("/gestionUsuarios");
      setDisableButton(false);
    });
  };

  const _handleDelete = () => {
    setDisableButtonDelete(true);
    postPacienteEliminar(idPaciente).then(({ data }) => {
      //console.log(data)
      alert(data.mensaje);
      navigate("/gestionUsuarios");
      setDisableButtonDelete(true);
    });
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
                <h1 className="titleStyle">Información del usuario</h1>
              </div>
              <div className="containerButtonRight">
                <ButtonDelete
                  Nombre={"ELIMINAR"}
                  Disabled={disableButtonDelete}
                  OnClick={_handleDelete}
                />
              </div>
            </div>

            <div className="spaceVer20" />

            <RegistroUsuario
              paciente={paciente}
              handleSubmit={handleSubmit}
              onSubmit={onSubmit}
              register={register}
              errors={errors}
              disableButton={disableButton}
              handleChangeForm={handleChangeForm}
            />
          </div>
        </div>
      </div>
    </>
  );
};
