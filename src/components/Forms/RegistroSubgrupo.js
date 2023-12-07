import React from "react";

import { TextInput } from "../Input/TextInput";
import { Select } from "../Input/Select";

export const RegistroSubgrupo = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  disableButton,
  Grupo
}) => {
  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="row3-Inputs">
          <TextInput
            Name={"Nombre"}
            LabelInput={"Nombre del subgrupo*"}
            Placeholder={"Ej ALFA"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
            }}
            ErrorInput={errors.Nombre?.message}
          />
          <Select
            Name={"Grupo"}
            LabelInput={"Grupo*"}
            Placeholder={"Selecciona el Grupo"}
            SelectOption={Grupo}
            Register={register}
            Validation={{ required: "El campo es requerido" }}
            ErrorInput={errors.Grupo?.message}
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
