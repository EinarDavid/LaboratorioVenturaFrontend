import React from "react";

import { TextInput } from "../Input/TextInput";
import { Select } from "../Input/Select";

export const RegistroProducto = ({
  handleSubmit,
  onSubmit,
  register,
  errors,
  disableButton,
  handleChangeForm,
  _Price,
  Proveedor,
  Grupo,
  Subgrupo,
}) => {
  

  const GrupoFamilia = [
    {
      Nombre: "ALFA",
      _id: 1,
    },
    {
      Nombre: "ASOFAR",
      _id: 2,
    },
  ];

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="row3-Inputs">
          <TextInput
            Name={"Codigo"}
            LabelInput={"Código para identificar el producto"}
            Placeholder={"Ej ED123"}
            Register={register}
            //Validation={{ required: "El campo es requerido" }}
            ErrorInput={errors.Codigo?.message}
          />

          <TextInput
            Name={"Nombre"}
            LabelInput={"Nombre del producto*"}
            Placeholder={"Ej. Amoxicilina"}
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
            Name={"NombreGenerico"}
            LabelInput={"Nombre generico del producto*"}
            Placeholder={"Ej. Paracetamol"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                message: "Solo se permiten letras",
              },
            }}
            ErrorInput={errors.NombreGenerico?.message}
          />
        </div>
        <div className="spaceVer30" />
        <div className="row3-Inputs">
          <TextInput
            Name={"UnidadMedida"}
            LabelInput={"Unidad de Medida*"}
            Placeholder={"Ej gramos"}
            Register={register}
            Validation={{ required: "El campo es requerido" }}
            ErrorInput={errors.UnidadMedida?.message}
          />

          <TextInput
            Name={"RegistroSanitario"}
            LabelInput={"Registro Sanitario"}
            Placeholder={"Ej 12312ad12"}
            Register={register}
            //Validation={{ required: "El campo es requerido" }}
            ErrorInput={errors.RegistroSanitario?.message}
          />
          <TextInput
            Name={"Descripcion"}
            LabelInput={"Descripción"}
            Placeholder={"Ej. Tomar cada 8 horas"}
            Register={register}
            //Validation={{ required: "El campo es requerido" }}
            ErrorInput={errors.Descripcion?.message}
          />
        </div>

        <div className="spaceVer30" />
        <div className="row3-Inputs">
          <Select
            Name={"Proveedor"}
            LabelInput={"Proveedor*"}
            Placeholder={"Selecciona el Proveedor"}
            SelectOption={Proveedor}
            Register={register}
            //Validation={{ required: "El campo es requerido" }}
            ErrorInput={errors.Proveedor?.message}
          />

          <TextInput
            Name={"CodigoBarras"}
            LabelInput={"Código de Barras"}
            Placeholder={"Ej. 2342123532"}
            Register={register}
            //Validation={{ required: "El campo es requerido" }}
            ErrorInput={errors.CodigoBarras?.message}
          />

          <TextInput
            Name={"FechaVencimiento"}
            LabelInput={"Fecha de Vencimiento"}
            Placeholder={"Ej. 07/07/2024"}
            Register={register}
            Validation={{
              pattern: {
                value:
                  /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
                message: "El formato debe ser DD/MM/AAAA",
              },
            }}
            ErrorInput={errors.FechaVencimiento?.message}
          />
        </div>
        <div className="spaceVer30" />
        <div className="row3-Inputs">
          <Select
            Name={"GrupoFamilia"}
            LabelInput={"Grupo o Familia"}
            Placeholder={"Selecciona el Grupo o Familia"}
            SelectOption={Grupo}
            Register={register}
            //Validation={{ required: "El campo es requerido" }}
            ErrorInput={errors.GrupoFamilia?.message}
          />
          <Select
            Name={"SubGrupo"}
            LabelInput={"Subgrupo"}
            Placeholder={"Selecciona el Subgrupo"}
            SelectOption={Subgrupo}
            Register={register}
            //Validation={{ required: "El campo es requerido" }}
            ErrorInput={errors.SubGrupo?.message}
          />

          <TextInput
            Name={"Ubicacion"}
            LabelInput={"Ubicación del producto"}
            Placeholder={"Ej. Vitrina H Sección 2"}
            Register={register}
            //Validation={{ required: "El campo es requerido" }}
            ErrorInput={errors.Ubicacion?.message}
          />
        </div>
        <div className="spaceVer30" />

        <div className="row3-Inputs">
          <TextInput
            Name={"PrecioCompra"}
            LabelInput={"Precio de compra*"}
            Placeholder={"Ej. 10 Bs"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value: /^\d*\.?\d+$/,
                message: "Solo se permiten números",
              },
              onChange: (e) => _Price(e),
            }}
            ErrorInput={errors.PrecioCompra?.message}
          />
          <TextInput
            Disabled={true}
            Name={"Utilidad"}
            LabelInput={"% Utilidad de ganancia*"}
            Placeholder={"Ej. 20 %"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value: /^\d*\.?\d+$/,
                message: "Solo se permiten números",
              },
              onChange: (e) => _Price(e),
            }}
            ErrorInput={errors.Utilidad?.message}
          />

          <TextInput
            Name={"PrecioVenta"}
            LabelInput={"Precio de Venta*"}
            Placeholder={"Ej. 12 Bs"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value: /^\d*\.?\d+$/,
                message: "Solo se permiten números",
              },
              onChange: (e) => _Price(e),
            }}
            ErrorInput={errors.PrecioVenta?.message}
          />
        </div>
        <div className="spaceVer30" />
        <div className="row3-Inputs">
          <TextInput
            Name={"InventarioMinimo"}
            LabelInput={"Inventario minimo"}
            Placeholder={"Ej. 5"}
            Register={register}
            Validation={{
              //required: "El campo es requerido",
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },
            }}
            ErrorInput={errors.InventarioMinimo?.message}
          />
          <TextInput
            //Disabled={true}
            Name={"InventarioActual"}
            LabelInput={"Inventario actual*"}
            Placeholder={"Ej. 20"}
            Register={register}
            Validation={{
              //required: "El campo es requerido",
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },
            }}
            ErrorInput={errors.InventarioActual?.message}
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
