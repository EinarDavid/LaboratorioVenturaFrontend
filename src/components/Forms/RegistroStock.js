import React from "react";
import { ButtonPrimary } from "../Button/ButtonPrimary";
import { TextInput } from "../Input/TextInput";
import { Select } from "../Input/Select";
import Images from "../../config/Images";
import { TexInputUseFormDinamic } from "../Input/TexInputUseFormDinamic";
import { SelectUseFormDinamic } from "../Input/SelectUseFormDinamic";

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

  fields,
  append,
  remove,
}) => {
  const Proveedor = [
    {
      option: "Proveedor 1",
      id: 1,
    },
    {
      option: "Proveedor 2",
      id: 2,
    },
  ];

  const Producto = [
    {
      option: "ALFA",
      id: 1,
    },
    {
      option: "ASOFAR",
      id: 2,
    },
  ];
  //console.log(append)

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="row2-Inputs">
          <TextInput
            Disabled={true}
            Name={"MontoTotal"}
            LabelInput={"Sumatoria Total*"}
            Placeholder={"Ej. 200 Bs"}
            Register={register}
            ErrorInput={errors.MontoTotal?.message}
          />

          <Select
            Name={"Proveedor"}
            LabelInput={"Proveedor*"}
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
                    style={{ marginLeft: "5px" }}
                    type="button"
                    onClick={() => remove(index)}
                  >
                    <img src={Images.REMOVE} width={26} alt="remove"></img>
                  </button>

                  <SelectUseFormDinamic
                    Name={"Codigo"}
                    LabelInput={"Código del producto*"}
                    Placeholder={"Selecciona el Código"}
                    SelectOption={Producto}
                    Register={register}
                    ErrorInput={errors.Codigo?.message}
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
                    ErrorInput={errors.CantidadTotal?.message}
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
                    ErrorInput={errors.PrecioCompra?.message}
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
                    ErrorInput={errors.FechaVencimiento?.message}
                    index={index}
                  />
                  <TexInputUseFormDinamic
                    Name={"Lote"}
                    LabelInput={"Numero de lote del producto"}
                    Placeholder={"Ej 10"}
                    Register={register}
                    Validation={{
                      //required: "El campo es requerido",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Solo se permiten números",
                      },
                    }}
                    ErrorInput={errors.Lote?.message}
                    index={index}
                  />
                </div>
              </div>
            </div>
          );
        })}

        <div className="AddInputContainer">
          <button
            className="buttonAddForm"
            type="button"
            onClick={() => append({ number: "" })}
          >
            <img src={Images.ADDBLUE2} width={30} alt="add" />
            Añadir campo
          </button>
        </div>

        <div className="spaceVer20" />

        <ButtonPrimary
          Nombre={"GUARDAR"}
          Disabled={disableButton}
          OnClick={onSubmit}
        />
      </form>
    </>
  );
};
