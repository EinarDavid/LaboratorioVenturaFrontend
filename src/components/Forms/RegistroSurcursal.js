import React from "react";
import { TextInput } from "../Input/TextInput";
import { Select } from "../Input/Select";

export const RegistroSurcursal = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  disableButton,
}) => {
  const Ciudad = [
    {
      Nombre: "Cochabamba",
      _id: 1,
    },
    {
      Nombre: "La Paz",
      _id: 2,
    },
    {
      Nombre: "Santa Cruz",
      _id: 3,
    },
    {
      Nombre: "Sucre",
      _id: 4,
    },
    {
      Nombre: "Oruro",
      _id: 5,
    },
    {
      Nombre: "Potosi",
      _id: 6,
    },
    {
      Nombre: "Tarija",
      _id: 7,
    },
    {
      Nombre: "Beni",
      _id: 8,
    },
    {
      Nombre: "Pando",
      _id: 9,
    },
  ];
  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="row3-Inputs">
          <TextInput
            Name={"Nombre*"}
            LabelInput={"Nombre del grupo*"}
            Placeholder={"Ej ALFA"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
            }}
            ErrorInput={errors.Nombre?.message}
          />
          <TextInput
            Name={"Direccion"}
            LabelInput={"Dirección*"}
            Placeholder={"Ej ALFA"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
            }}
            ErrorInput={errors.Direccion?.message}
          />
          <Select
            Name={"Ciudad"}
            LabelInput={"Ciudad*"}
            Placeholder={"Selecciona el tipo de Movimiento"}
            SelectOption={Ciudad}
            Register={register}
            Validation={{
              required: "El campo es requerido",
            }}
            ErrorInput={errors.Ciudad?.message}
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
