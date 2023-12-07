import React, { useEffect, useState } from "react";
import { ButtonPrimary } from "../Button/ButtonPrimary";
import { TextInput } from "../Input/TextInput";
import { Select } from "../Input/Select";
import Images from "../../config/Images";
import { TexInputUseFormDinamic } from "../Input/TexInputUseFormDinamic";
import { SelectUseFormDinamic } from "../Input/SelectUseFormDinamic";
import { getProductTodos } from "../../services/productService";

export const RegistroStock = ({
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

  producto,
  STotal,
  total,
  fecha,
  _ProductSelect,
  getValues,
  stateRender
}) => {
  const [motivo, setMotivo] = useState([]);
  const [compra, setCompra] = useState(false);
  const [factura, setFactura] = useState(false);

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

  const TipoMovimiento = [
    {
      Nombre: "Movimiento de ingreso",
      _id: "MovimientoIngreso",
    },
    {
      Nombre: "Movimiento de egreso",
      _id: "MovimientoEgreso",
    },
  ];
  const TipoDocumento = [
    {
      Nombre: "Factura",
      _id: "Factura",
    },
    {
      Nombre: "Recibo",
      _id: "Recibo",
    },
  ];
  const TipoPago = [
    {
      Nombre: "Contado",
      _id: "Contado",
    },
    {
      Nombre: "Credito",
      _id: "Credito",
    },
  ];
  const _Motivo = (e) => {
    if (e.target.value === "MovimientoIngreso") {
      
      var Motivo = [
        {
          Nombre: "Ingreso por compra",
          _id: "IngresoPorCompra",
        },
        {
          Nombre: "Ingreso por inventario inicial",
          _id: "IngresoPorInventarioInicial",
        },
        {
          Nombre: "Ingreso por ajuste",
          _id: "IngresoPorAjuste",
        },
        {
          Nombre: "Ingreso por producción",
          _id: "IngresoPorProduccion",
        },
      ];
      setMotivo(Motivo);
    } else {
      //console.log("----", e.target.value);
      var Motivo = [
        {
          Nombre: "Salida por baja",
          _id: "SalidaPorBaja",
        },
        {
          Nombre: "Salida por Ajuste",
          _id: "SalidaPorAjuste",
        },
      ];
      setMotivo(Motivo);
    }
  };

  const _IngresoCompra = (e) => {
    console.log(e.target.value, e.target.name);
    if (e.target.value == "IngresoPorCompra") {
      setCompra(true);
    } else {
      setCompra(false);
    }
  };

  const _TipoDocumento = (e) => {
    if (e.target.value == "Factura") {
      setFactura(true);
    } else {
      setFactura(false);
    }
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
        <div className="row3-Inputs">
          <Select
            Name={"Proveedor"}
            LabelInput={"Proveedor"}
            Placeholder={"Selecciona el Proveedor"}
            SelectOption={Proveedor}
            Register={register}
            //Validation={{required: "El campo es requerido",}}
            ErrorInput={errors.Proveedor?.message}
          />
          <Select
            Name={"TipoMovimiento"}
            LabelInput={"Tipo de Movimiento*"}
            Placeholder={"Selecciona el tipo de Movimiento"}
            SelectOption={TipoMovimiento}
            Register={register}
            Validation={{
              required: "El campo es requerido",
              onChange: (e) => _Motivo(e),
            }}
            ErrorInput={errors.TipoMovimiento?.message}
          />
          {motivo.length > 0 ? (
            <>
              <Select
                Name={"Motivo"}
                LabelInput={"Motivo*"}
                Placeholder={"Selecciona el motivo"}
                SelectOption={motivo}
                Register={register}
                Validation={{
                  required: "El campo es requerido",
                  onChange: (e) => _IngresoCompra(e),
                }}
                ErrorInput={errors.Motivo?.message}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="spaceVer10" />
        {compra ? (
          <>
            <div className="row3-Inputs">
              <Select
                Name={"TipoDocumento"}
                LabelInput={"Tipo de documento*"}
                Placeholder={"Selecciona el tipo de documento"}
                SelectOption={TipoDocumento}
                Register={register}
                Validation={{
                  required: "El campo es requerido",
                  onChange: (e) => _TipoDocumento(e),
                }}
                ErrorInput={errors.TipoDocumento?.message}
              />
              <TextInput
                Name={"NumeroDocumento"}
                LabelInput={"Número de documento*"}
                Placeholder={"Ej. 122"}
                Register={register}
                Validation={{
                  required: "El campo es requerido",
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Solo se permiten números",
                  },
                }}
                ErrorInput={errors.NumeroDocumento?.message}
              />
              <TextInput
                Name={"FechaCompra"}
                LabelInput={"Fecha de Compra"}
                Placeholder={"Ej. 07/12/2023"}
                Register={register}
                Validation={{
                  pattern: {
                    value:
                      /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
                    message: "El formato debe ser DD/MM/AAAA",
                  },
                }}
                ErrorInput={errors.FechaCompra?.message}
              />
            </div>
            <div className="spaceVer10" />
            <div className="row3-Inputs">
              <Select
                Name={"TipoPago"}
                LabelInput={"Tipo de Pago*"}
                Placeholder={"Selecciona el tipo de Pago"}
                SelectOption={TipoPago}
                Register={register}
                Validation={{
                  required: "El campo es requerido",
                  //onChange: (e) => _IngresoCompra(e),
                }}
                ErrorInput={errors.TipoPago?.message}
              />
              {factura ? (
                <>
                  <TextInput
                    Name={"CodigoAutorizacion"}
                    LabelInput={"Código de autorización*"}
                    Placeholder={"Ej 123UF324"}
                    Register={register}
                    Validation={{ required: "El campo es requerido" }}
                    ErrorInput={errors.CodigoAutorizacion?.message}
                  />
                  <TextInput
                    Name={"CodigoControl"}
                    LabelInput={"Código de control*"}
                    Placeholder={"Ej 9539583"}
                    Register={register}
                    Validation={{ required: "El campo es requerido" }}
                    ErrorInput={errors.CodigoControl?.message}
                  />
                </>
              ) : (
                <></>
              )}
            </div>
          </>
        ) : (
          <></>
        )}
        <div className="row100">
          <p className="Effort">{fecha}</p>
          <p className="Effort">Total: {total} Bs</p>
        </div>

        <div className="spaceVer10" />

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

                  <SelectUseFormDinamic
                    Name={"_idProducto"}
                    LabelInput={"Código del producto*"}
                    Placeholder={"Selecciona el Código"}
                    SelectOption={producto}
                    Register={register}
                    Validation={{
                      required: "El campo es requerido",
                      onChange: (e) => _ProductSelect(e, index),
                    }}
                    ErrorInput={errors}
                    index={index}
                  />

                  <TexInputUseFormDinamic
                    Name={"Lote"}
                    LabelInput={"Numero de lote*"}
                    Placeholder={"Ej 1233211"}
                    Register={register}
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
                  <div className="containerTextInput">
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
                      onChange: (e) => STotal(e),
                    }}
                    ErrorInput={errors}
                    index={index}
                  />
                  <div key={stateRender}>
                    <p className="labelInputError"> Inventario actual: {getValues("Detalle." + index + ".Inventario")} </p>
                  </div>
                  </div>
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
                      onChange: (e) => STotal(e),
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
