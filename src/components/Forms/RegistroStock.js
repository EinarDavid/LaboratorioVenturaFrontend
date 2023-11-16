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
      id: 1,
    },
    {
      option: "Proveedor 2",
      id: 2,
    },
  ];

  const GrupoFamilia = [
    {
      option: "ALFA",
      id: 1,
    },
    {
      option: "ASOFAR",
      id: 2,
    },
  ];

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
        <div className="row3-Inputs">
          <TextInput
            Name={"Descripcion"}
            LabelInput={"Descripción"}
            Placeholder={"Ej. Tomar cada 8 horas"}
            Register={register}
            ErrorInput={errors.Descripcion?.message}
          />

          <TextInput
            Name={"CodigoBarras"}
            LabelInput={"Código de Barras"}
            Placeholder={"Ej. 2342123532"}
            Register={register}
            ErrorInput={errors.CodigoBarras?.message}
          />
        </div>

        <div className="spaceVer30" />
        <div className="row3-Inputs">
          <Select
            Name={"GrupoFamilia"}
            LabelInput={"Grupo o Familia"}
            Placeholder={"Selecciona el Grupo o Familia"}
            SelectOption={GrupoFamilia}
            Register={register}
            ErrorInput={errors.GrupoFamilia?.message}
          />

          <Select
            Name={"SubGrupo"}
            LabelInput={"Subgrupo"}
            Placeholder={"Selecciona el Subgrupo"}
            SelectOption={GrupoFamilia}
            Register={register}
            ErrorInput={errors.SubGrupo?.message}
          />

          <TextInput
            Name={"Ubicacion"}
            LabelInput={"Ubicación del producto"}
            Placeholder={"Ej. Vitrina H Sección 2"}
            Register={register}
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
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },
            }}
            ErrorInput={errors.PrecioCompra?.message}
          />

          <TextInput
            Name={"Utilidad"}
            LabelInput={"% Utilidad de ganancia*"}
            Placeholder={"Ej. 20 %"}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },
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
                value: /^[0-9]+$/,
                message: "Solo se permiten números",
              },
            }}
            ErrorInput={errors.PrecioVenta?.message}
          />
        </div>
        <div className="spaceVer30" />

        
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
