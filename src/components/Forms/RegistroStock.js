import React from "react";
import { ButtonPrimary } from "../Button/ButtonPrimary";
import { TextInput } from "../Input/TextInput";
import { Select } from "../Input/Select";

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
}) => {
  const Proveedor = [
    {
      option: "Proveedor 1",
      id_option: 1,
    },
    {
      option: "Proveedor 2",
      id_option: 2,
    },
  ];

  const GrupoFamilia = [
    {
      option: "ALFA",
      id_option: 1,
    },
    {
      option: "ASOFAR",
      id_option: 2,
    },
  ];

  return (
    <>
      <div className="row2-Inputs">
        <TextInput
          Name={"Nombre"}
          LabelInput={"Nombre del producto*"}
          Placeholder={"Ej. Amoxicilina"}
          Register={register("Nombre", {
            required: "El campo es requerido",
            pattern: {
              value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
              message: "Solo se permiten letras",
            },
          })}
          ErrorInput={errors.Nombre?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.Nombre || ""}
        />

        <Select
          Name={"Proveedor"}
          LabelInput={"Proveedor*"}
          Placeholder={"Selecciona el Proveedor"}
          SelectOption={Proveedor}
          Register={register("Proveedor", {
            //required: "El campo es requerido",
          })}
          ErrorInput={errors.Proveedor?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.Proveedor}
        />
      </div>
      <div className="spaceVer30" />
      <div className="row3-Inputs">
        <TextInput
          Name={"Descripcion"}
          LabelInput={"Descripción"}
          Placeholder={"Ej. Tomar cada 8 horas"}
          Register={register("Descripcion", {})}
          ErrorInput={errors.Descripcion?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.Descripcion || ""}
        />

        <TextInput
          Name={"CodigoBarras"}
          LabelInput={"Código de Barras"}
          Placeholder={"Ej. 2342123532"}
          Register={register("CodigoBarras")}
          ErrorInput={errors.CodigoBarras?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.CodigoBarras || ""}
        />
      </div>

      <div className="spaceVer30" />
      <div className="row3-Inputs">
        <Select
          Name={"GrupoFamilia"}
          LabelInput={"Grupo o Familia"}
          Placeholder={"Selecciona el Grupo o Familia"}
          SelectOption={GrupoFamilia}
          Register={register("GrupoFamilia", {
            //required: "El campo es requerido",
          })}
          ErrorInput={errors.GrupoFamilia?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.GrupoFamilia}
        />

        <Select
          Name={"SubGrupo"}
          LabelInput={"Subgrupo"}
          Placeholder={"Selecciona el Subgrupo"}
          SelectOption={GrupoFamilia}
          Register={register("SubGrupo", {
            //required: "El campo es requerido",
          })}
          ErrorInput={errors.SubGrupo?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.SubGrupo}
        />

        <TextInput
          Name={"Ubicacion"}
          LabelInput={"Ubicación del producto"}
          Placeholder={"Ej. Vitrina H Sección 2"}
          Register={register("Ubicacion")}
          ErrorInput={errors.Ubicacion?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.Ubicacion || ""}
        />
      </div>
      <div className="spaceVer30" />
      <div className="row3-Inputs">
        <TextInput
          Name={"PrecioCompra"}
          LabelInput={"Precio de compra*"}
          Placeholder={"Ej. 10 Bs"}
          Register={register("PrecioCompra", {
            required: "El campo es requerido",
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo se permiten números",
            },
          })}
          ErrorInput={errors.PrecioCompra?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.PrecioCompra || ""}
        />

        <TextInput
          Name={"Utilidad"}
          LabelInput={"% Utilidad de ganancia*"}
          Placeholder={"Ej. 20 %"}
          Register={register("Utilidad", {
            required: "El campo es requerido",
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo se permiten números",
            },
          })}
          ErrorInput={errors.Utilidad?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.Utilidad || ""}
        />

        <TextInput
          Name={"PrecioVenta"}
          LabelInput={"Precio de Venta*"}
          Placeholder={"Ej. 12 Bs"}
          Register={register("PrecioVenta", {
            required: "El campo es requerido",
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo se permiten números",
            },
          })}
          ErrorInput={errors.PrecioVenta?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.PrecioVenta || ""}
        />
      </div>
      <div className="spaceVer30" />

      <div className="row3-Inputs">
        <TextInput
          Name={"InventarioMinimo"}
          LabelInput={"Inventario minimo"}
          Placeholder={"Ej. 0"}
          Register={register("InventarioMinimo", {
            //required: "El campo es requerido",
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo se permiten números",
            },
          })}
          ErrorInput={errors.InventarioMinimo?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.InventarioMinimo || ""}
        />

        <TextInput
          Name={"InventarioActual"}
          LabelInput={"Inventario actual*"}
          Placeholder={"Ej. 20"}
          Register={register("InventarioActual", {
            required: "El campo es requerido",
            pattern: {
              value: /^[0-9]+$/,
              message: "Solo se permiten números",
            },
          })}
          ErrorInput={errors.InventarioActual?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.InventarioActual || ""}
        />

        <TextInput
          Name={"FechaVencimiento"}
          LabelInput={"Fecha de Vencimiento"}
          Placeholder={"Ej. 07/07/2024"}
          Register={register("FechaVencimiento", {
            //required: "El campo es requerido",
            pattern: {
              value:
                /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
              message: "El formato debe ser DD/MM/AAAA",
            },
          })}
          ErrorInput={errors.FechaVencimiento?.message}
          OnChange={(e) => handleChangeForm(e)}
          Value={product?.FechaVencimiento || ""}
        />
      </div>
      <div className="spaceVer20" />

      <ButtonPrimary
        Nombre={"GUARDAR"}
        Disabled={disableButton}
        OnClick={onSubmit}
      />
    </>
  );
};
