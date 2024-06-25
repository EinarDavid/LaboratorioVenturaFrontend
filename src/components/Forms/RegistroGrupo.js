import React from "react";

import { TextInput } from "../Input/TextInput";

export const RegistroGrupo = ({
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
            LabelInput={"Nombre del grupo*"}
            Placeholder={"Ej ALFA"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              
            }}
            ErrorInput={errors.Nombre?.message}
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
