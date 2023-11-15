import React, { useEffect } from "react";
import { ButtonPrimary } from "../Button/ButtonPrimary";
import { TextInput } from "../Input/TextInput";
import { Select } from "../Input/Select";
import { PasswordInput } from "../Input/PasswordInput";

export const RegistroUsuario = ({
  user = {
    CI: "",
    Nombres: "",
    PrimerApellido: "",
    SegundoApellido: "",
    Fecha_de_Nacimiento: "",
    Genero: "",
    Telefono: "",
    Direccion: "",
    RazonSocial: "",
    NIT: "",
    Email: "",
    Password: "",
  },
  handleSubmit,
  onSubmit,
  register,
  errors,
  disableButton,
  handleChangeForm,
  watch,
}) => {
  const Sex = [
    {
      option: "Masculino",
      id: 11,
    },
    {
      option: "Femenino",
      id: 22,
    },
  ];

  const Cargo = [
    {
      option: "Administrador_General",
      id: 1,
    },
    {
      option: "Administrador_Farmacia",
      id: 2,
    },
    {
      option: "Administrador_laboratorio",
      id: 3,
    },
    {
      option: "Empleado_Farmacia",
      id: 4,
    },
    {
      option: "Empleado_Laboratorio",
      id: 5,
    },
    {
      option: "Cliente",
      id: 6,
    },
  ];

  const Sucursal = [
    { option: "Sucursal 1", id: 111 },
    { option: "Sucursal 2", id: 222 },
  ];
  //console.log("rEGISTERRRR: " , register)

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="row3-Inputs">
          <TextInput
            Name={"CI"}
            LabelInput={"Documento de Identidad*"}
            Placeholder={"Ej 9456123"}
            Register={register}
            Validation={{ required: "El campo es requerido" }}
            ErrorInput={errors.CI?.message}
            //OnChange={(e) => handleChangeForm(e)}
            //Value={user?.CI || ""}
          />

          <TextInput
            Name={"Nombres"}
            LabelInput={"Nombres*"}
            Placeholder={"Ej. Einar David"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                message: "Solo se permiten letras",
              },
            }}
            ErrorInput={errors.Nombres?.message}
            //OnChange={(e) => handleChangeForm(e)}
            //Value={user?.Nombres}
          />

          <TextInput
            Name={"PrimerApellido"}
            LabelInput={"Primer Apellido*"}
            Placeholder={"Ej Villarroel"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                message: "Solo se permiten letras",
              },
            }}
            ErrorInput={errors.PrimerApellido?.message}
            //OnChange={(e) => handleChangeForm(e)}
            //Value={user?.PrimerApellido}
          />
        </div>
        <div className="spaceVer30" />
        <div className="row3-Inputs">
          <TextInput
            Name={"SegundoApellido"}
            LabelInput={"Segundo Apellido"}
            Placeholder={"Ej. Vargas"}
            Register={register}
            Validation={{
              pattern: {
                value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                message: "Solo se permiten letras",
              },
            }}
            ErrorInput={errors.SegundoApellido?.message}
            //OnChange={(e) => handleChangeForm(e)}
            //Value={user?.SegundoApellido}
          />

          <TextInput
            Name={"Fecha_de_Nacimiento"}
            LabelInput={"Fecha de Nacimiento*"}
            Placeholder={"Ej. 06/06/2000"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value:
                  /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
                message: "El formato debe ser DD/MM/AAAA",
              },
            }}
            ErrorInput={errors.Fecha_de_Nacimiento?.message}
            //OnChange={(e) => handleChangeForm(e)}
            //Value={user?.Fecha_de_Nacimiento}
          />

          <Select
            Name={"Genero"}
            LabelInput={"Género*"}
            Placeholder={"Selecciona el Género"}
            SelectOption={Sex}
            Register={register}
            Validation={{ required: "El campo es requerido" }}
            ErrorInput={errors.Genero?.message}
            //OnChange={(e) => handleChangeForm(e)}
            //Value={user?.Genero}
          />
        </div>

        <div className="spaceVer30" />
        <div className="row3-Inputs">
          <TextInput
            Name={"Telefono"}
            LabelInput={"Teléfono*"}
            Placeholder={"Ej. 63949159"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },
            }}
            ErrorInput={errors.Telefono?.message}
            //OnChange={(e) => handleChangeForm(e)}
            //Value={user?.Telefono || ""}
          />

          <TextInput
            Name={"Direccion"}
            LabelInput={"Dirección"}
            Placeholder={"Ej. Plaza 10 de Febrero / Villa Pagador"}
            Register={register}
            ErrorInput={errors.Direccion?.message}
            //OnChange={(e) => handleChangeForm(e)}
            //Value={user?.Direccion}
          />

          <Select
            Name={"Cargo"}
            LabelInput={"Cargo*"}
            Placeholder={"Selecciona el Cargo"}
            SelectOption={Cargo}
            Register={register}
            Validation={{ required: "El campo es requerido" }}
            
            ErrorInput={errors.Cargo?.message}
            //OnChange={(e) => handleChangeForm(e)}
            //Value={user?.Cargo}
          />
        </div>
        <div className="spaceVer30" />
        <div className="row3-Inputs">
          <TextInput
            Name={"Email"}
            LabelInput={"Correo electrónico*"}
            Placeholder={"Ej. einardavidvillarroel@gmail.com"}
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
            //OnChange={(e) => handleChangeForm(e)}
            //Value={user?.Email}
          />

          <PasswordInput
            Name={"Password"}
            LabelInput={"Contraseña*"}
            Placeholder={"Debe contener 8 caracteres mínimo"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value:
                  /^(?=.*[0-9])(?=.*[!@#$%^&*.,-_])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                message:
                  "La contraseña debe contener almenos 6 caracteres, entre ellos 1 letra mayuscula, 1 letra minuscula y 1 número.",
              },
            }}
            ErrorInput={errors.Password?.message}
            //Onchange={(e) => handleChangeForm(e)}
            //Value={user?.Password}
          />

          <Select
            Name={"Sucursal"}
            LabelInput={"Sucursal*"}
            Placeholder={"Selecciona la Sucursal"}
            SelectOption={Sucursal}
            Register={register}
            Validation={{
              required: "El campo es requerido",
            }}
            ErrorInput={errors.Sucursal?.message}
            //OnChange={(e) => handleChangeForm(e)}
            //Value={user?.Sucursal}
          />
        </div>
        <div className="spaceVer20" />

        {/* <ButtonPrimary
          Nombre={"GUARDAR"}
          Disabled={disableButton}
          OnClick={onSubmit}
        /> */}

        <div className="container-Button-Modal">
          <button
            //onClick={onSubmit}
            className="ButtonPrimary"
            type="submit"
            disabled={disableButton}
          >
            GUARDAR
          </button>
        </div>

        {/* <pre>{JSON.stringify(watch(), null, 2)} </pre> */}
      </form>
    </>
  );
};

/*useEffect(() => {
    if (
      user.CI !== "" &&
      user.CI !== undefined &&
      user.Nombres !== "" &&
      user.Nombres !== undefined &&
      user.PrimerApellido !== "" &&
      user.PrimerApellido !== undefined &&
      user.Fecha_de_Nacimiento !== "" &&
      user.Fecha_de_Nacimiento !== undefined &&
      user.Genero !== "" &&
      user.Genero !== undefined &&
      user.Telefono !== "" &&
      user.Telefono !== undefined
    ) {
      console.log("Entro a IF ", user.CI);
      setDisableButton(false);
    } else {
      console.log("ElSE", user);
      setDisableButton(true);
    }

    console.log("state button:", disableButton, user);
  }, [user]); */
