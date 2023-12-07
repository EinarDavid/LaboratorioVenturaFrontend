import React from "react";

import { TextInput } from "../Input/TextInput";

export const RegistroProveedor = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  disableButton,

}) => {

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="row3-Inputs">
          <TextInput
            Name={"Nombre"}
            LabelInput={"Nombre del proveedor*"}
            Placeholder={"Ej Bagó"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                message: "Solo se permiten letras",
              },
            }}
            ErrorInput={errors.Nombre?.message}
          />

          <TextInput
            Name={"RazonSocial"}
            LabelInput={"Razon Social*"}
            Placeholder={"Ej. Bagó SRL"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                message: "Solo se permiten letras",
              },
            }}
            ErrorInput={errors.RazonSocial?.message}
          />
          <TextInput
            Name={"NIT"}
            LabelInput={"NIT*"}
            Placeholder={"Ej. 93674931232"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },
            }}
            ErrorInput={errors.NIT?.message}
          />
        </div>
        <div className="spaceVer30" />
        <div className="row3-Inputs">
          <TextInput
            Name={"Direccion"}
            LabelInput={"Dirección"}
            Placeholder={"'Ej. Plaza 10 de Febrero / Villa Pagador'"}
            Register={register}
            ErrorInput={errors.Direccion?.message}
          />

          <TextInput
            Name={"Telefono"}
            LabelInput={"Telefono*"}
            Placeholder={"Ej 63949159"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },
            }}
            ErrorInput={errors.Telefono?.message}
          />
        </div>

        <div className="spaceVer20" />
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
      </form>
    </>
  );
};
