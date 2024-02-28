import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PasswordInput } from "../components/Input/PasswordInput";
import { useForm } from "react-hook-form";
import { TextInput } from "../components/Input/TextInput";
import { getUser, postLogin } from "../services/usuarioService";
import axios from "axios";

export const LoginApp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({});

  
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data) => {

    console.log(data)
    postLogin(data).then(({ data }) => {
            console.log(data)
            localStorage.setItem('token', data.token);
            
            axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;

            getUser().then(({data})=>{
              console.log(data)
            })

            navigate("/*", {
              replace: true,
            });
        })
        .catch(()=>{
          alert("Error")
        })
    
  };


  return (
    <>
      <div className="fondoLogin">
        <div className="loginContainer">
          <div className="containerForm">
            <h1 className="titleStyle">Bienvenido</h1>
            <div className="spaceVer20" />
            <p className="parrafoStyle">
              Por favor ingrese sus datos para iniciar sesión a continuación
            </p>
            <div className="spaceVer20" />
            <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                Name={"Email"}
                LabelInput={"Correo electronico*"}
                Placeholder={"Ej einar@gmail.com"}
                Register={register}
                Validation={{
                  required: "El campo es requerido",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Correo electrónico incorrecto",
                  },
                }}
                ErrorInput={errors.Email?.message}
                
              />
              <div className="spaceVer30" />
              <PasswordInput
                Name={"Password"}
                LabelInput={"Contraseña*"}
                Placeholder={"Escribe tu contraseña"}
                Register={register}
                Validation={{
                  required: "El campo es requerido",
                }}
                
                ErrorInput={errors.Password?.message}

              />
              <div className="spaceVer30" />
              <button className="ButtonPrimary100" type="submit">
                iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
