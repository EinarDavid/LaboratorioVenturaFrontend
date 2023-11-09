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

import {
  getUsuarioUno,
  postUsuarioEliminar,
  postUsuarioModificar,
} from "../services/usuarioService";

export const ViewUser = ({ callback }) => {
  const navigate = useNavigate();
  let { idUser } = useParams();
  //console.log("ID", idUser);

  const [disableButton, setDisableButton] = useState(false);
  const [disableButtonDelete, setDisableButtonDelete] = useState(false);
  const [data, setData] = useState({});

  const {
    register,
    formState,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const llamarPaciente = () => {
    try {
      console.log("Entro aqui");
      getUsuarioUno(idUser).then(({ data }) => {
        console.log("Data-----", data);
        setData(data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    llamarPaciente();

    console.log("llamandooo", data);
  }, []);

  //const [cabecera, setCabecera] = useState({});
  const handleChangeForm = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const onSubmit = () => {
    try {
      console.log("Datos Enviados", data);
      setDisableButton(true);

      postUsuarioModificar(idUser, data).then(({ data }) => {
        console.log("Datos BD", data);
       
        
        setDisableButton(false);
        if (callback) callback()

        alert(data.mensaje);
        navigate("/gestionUsuarios");

      });
    } catch (error) {
      console.log(error);
    }
  };

  const _handleDelete = () => {
    try {
      setDisableButtonDelete(true);
    postUsuarioEliminar(idUser).then(({ data }) => {
      //console.log(data)
      
      setDisableButtonDelete(true);

      if (callback) callback()

      alert(data.mensaje);
      navigate("/gestionUsuarios");
    });
    } catch (error) {
      console.log(error)
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
              user={data}
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
