import React, { useEffect, useState } from "react";
import { ButtonPrimary } from "../Button/ButtonPrimary";
import { TextInput } from "../Input/TextInput";
import { Select } from "../Input/Select";
import Images from "../../config/Images";
import { TexInputUseFormDinamic } from "../Input/TexInputUseFormDinamic";
import { SelectUseFormDinamic } from "../Input/SelectUseFormDinamic";
import { getProductTodos } from "../../services/productService";

export const RegistroStock = ({
  product = {
    Codigo: "",
    Nombre: "",
    UnidadMedida: "",
    Descripcion: "",
    Proveedor: "",
    CodigoBarras: "",
    GrupoFamilia: "",
    SubGrupo: "",
    Ubicacion: "",
    PrecioCompra: "",
    Utilidad: "",
    PrecioVenta: "",
    InventarioMinimo: "",
    InventarioActual: "",
    FechaVencimiento: "",
  },
  handleSubmit,
  onSubmit,
  register,
  errors,
  disableButton,
  handleChangeForm,
  watch,

  fields,
  append,
  remove,

  producto
}) => {
  const Proveedor = [
    {
      Nombre: "Proveedor 1",
      _id: 111,
    },
    {
      Nombre: "Proveedor 2",
      _id: 222,
    },
  ];

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="row3-Inputs">
          {/* <TextInput
            //Disabled={true}
            Name={"MontoTotal"}
            LabelInput={"Sumatoria Total*"}
            Placeholder={"Ej. 200 Bs"}
            Register={register}
            Validation={{required: "El campo es requerido",}}
            ErrorInput={errors.MontoTotal?.message}
          /> */}

          <Select
            Name={"Proveedor"}
            LabelInput={"Proveedor"}
            Placeholder={"Selecciona el Proveedor"}
            SelectOption={Proveedor}
            Register={register}
            //Validation={{required: "El campo es requerido",}}
            ErrorInput={errors.Proveedor?.message}
          />
        </div>
        <div className="spaceVer30" />

        {fields?.map((field, index) => {
          return (
            <div key={field.id}>
              <div className="containerCampo">
                <div className="row3-Inputs">
                  <button
                    className="buttonRemoveRow"
                    type="button"
                    onClick={() => remove(index)}
                  >
                    <img src={Images.REMOVE} width={26} alt="remove"></img>
                  </button>
                  {/* <input {...register(`Detalle.${index}.firstName`, {
                    required : "Ell camposasd"
                  } )} />
                  {
                    (errors.Detalle !== undefined)? (<>
                    <label className='labelInputError'>{errors?.Detalle[index]?.firstName?.message}</label>
                    </>): (<>no</>)
                  }

                  <input {...register(`Detalle.${index}.lastname`)} /> */}

                  <SelectUseFormDinamic
                    Name={"Codigo"}
                    LabelInput={"Código del producto*"}
                    Placeholder={"Selecciona el Código"}
                    SelectOption={producto}
                    Register={register}
                    Validation={{
                      required: "El campo es requerido",
                    }}
                    ErrorInput={errors}
                    index={index}
                  />

                  <TexInputUseFormDinamic
                    Name={"CantidadTotal"}
                    LabelInput={"Cantidad Total*"}
                    Placeholder={"Ej 231"}
                    Register={register}
                    Validation={{
                      required: "El campo es requerido",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Solo se permiten números",
                      },
                    }}
                    
                    ErrorInput={errors}
                    index={index}
                  />
                  
                </div>
                <div className="row3-Inputs">
                  <TexInputUseFormDinamic
                    Name={"FechaVencimiento"}
                    LabelInput={"Fecha de vencimiento"}
                    Placeholder={"Ej 20/12/2024"}
                    Register={register}
                    Validation={{
                      //required: "El campo es requerido",
                      pattern: {
                        value:
                          /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
                        message: "El formato debe ser DD/MM/AAAA",
                      },
                    }}
                    ErrorInput={errors}
                    index={index}
                  />
                  <TexInputUseFormDinamic
                    Name={"PrecioCompra"}
                    LabelInput={"Precio compra del producto*"}
                    Placeholder={"Ej 231"}
                    Register={register}
                    Validation={{
                      required: "El campo es requerido",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Solo se permiten números",
                      },
                    }}
                    ErrorInput={errors}
                    index={index}
                  />
                </div>
              </div>
              <div className="spaceVer20" />
            </div>
          );
        })}

        <div className="AddInputContainer">
          <button
            className="buttonAddForm"
            type="button"
            onClick={() => append()}
          >
            <img src={Images.ADDBLUE2} width={30} alt="add" />
            Añadir campo
          </button>
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

         {/* <pre>{JSON.stringify(watch(), null, 2)} </pre> */}
      </form>
    </>
  );
};
