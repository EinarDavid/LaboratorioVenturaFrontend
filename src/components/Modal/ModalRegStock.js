import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Images from "../../config/Images";
import { postAgregarPaciente } from "../../services/pacienteService";

import { RegistroProducto } from "../Forms/RegistroProducto";
import { RegistroStock } from "../Forms/RegistroStock";
import { postAgregarStock } from "../../services/stockService";
import { ModalConfirmation } from "./ModalConfirmation";
import { getProductTodos } from "../../services/productService";

export const ModalRegStock = ({ SetModal, modal, callback }) => {
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [disableButtonConfirmation, setDisableButtonConfirmation] =
    useState(false);
  const [datos, setDatos] = useState({});
  const [producto, setProducto] = useState({});
  const [total, setTotal] = useState(0);
  const [stateRender, setStateRender] = useState(0)

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    control,
    watch,
    getValues,
    setValue,
  } = useForm({
    mode: "all",
  });

  const { fields, append, remove } = useFieldArray({
    name: "Detalle",
    control,
  });

  const onSubmit = () => {
    setDisableButtonConfirmation(true);
    try {
      postAgregarStock(datos).then(({ data }) => {
        console.log(data);
        reset();
        //Habilitas boton
        setDisableButton(false);
        setDisableButtonConfirmation(false);
        setModalConfirmation(false);
        SetModal(false);

        if (callback) callback();
        //limpiar cajas, cerrar modal y avisar que fue añadido con exito
        alert(data.mensaje);
        setDatos({});
      });
    } catch (error) {
      alert(error);
      console.log("----", error);
    }
  };

  const onConfirmation = (data) => {
    //SumTotal();
    data.MontoTotal = total;
    console.log("Datos", data);
    setDatos(data);
    setDisableButton(true);
    console.log("entro a Confirmation");

    setModalConfirmation(true);
  };

  const onCancel = () => {
    console.log("entro a cancel");
    setModalConfirmation(false);
    SetModal(false);
    reset();
  };

  //console.log("Valores",getValues("Detalle"))
  var Detail;
  var SumaTotal = 0;
  const SumTotal = () => {
    Detail = getValues("Detalle");

    if (Detail !== undefined) {
      Detail.map(({ CantidadTotal, PrecioCompra }) => {
        //console.log("Cantidad:", CantidadTotal)
        var Cantidad = 1;
        if(CantidadTotal !== 0 && CantidadTotal !== ""){
          var Cantidad = CantidadTotal
        } 
        var precio = Cantidad * PrecioCompra;
        SumaTotal += precio;

        //console.log("Precio:", precio, "SumTotal:", SumaTotal);
      });
      setTotal(SumaTotal);
      //setValue("MontoTotal", SumaTotal);
    }
  };

  

  useEffect(() => {
    getProductTodos().then(({ data }) => {
      //console.log(data)
      setProducto(data);
      append()
    });
  }, []);

  const _ProductSelect = (e, index) => {
    
    var filter = producto.find((element) => element._id == e.target.value)
    //console.log(filter)

    setValue("Detalle." + index + ".Inventario", filter.InventarioActual);
    setStateRender(stateRender+1)
    
    //console.log(getValues("Detalle." + index + ".Inventario"), stateRender)
  }


  return modal ? (
    <>
      <div className="popup_container">
        <div className="popup_itself">
          <div className="popup_button_container">
            <h1 className="titleStyle">Registro de inventario</h1>
            <button
              className="button_close"
              onClick={() => {
                SetModal(false);
                reset();
              }}
            >
              {<img src={Images.CLOSE} width={30} alt="icon"></img>}{" "}
            </button>
          </div>
          <div className="spaceVer20" />

          <RegistroStock
            handleSubmit={handleSubmit}
            onSubmit={onConfirmation}
            register={register}
            errors={errors}
            disableButton={disableButton}
            fields={fields}
            append={append}
            remove={remove}
            watch={watch}
            producto={producto}
            STotal={SumTotal}
            total={total}
            _ProductSelect= {_ProductSelect}
            getValues={getValues}
            stateRender={stateRender}
          />

        </div>
      </div>
      <ModalConfirmation
        ModalConfirmation={modalConfirmation}
        ValueText={"¿Estas seguro de que quieres registrar el inventario?"}
        OnCancel={onCancel}
        OnSubmit={onSubmit}
        DisableButtonConfirmation={disableButtonConfirmation}
      />
          </>
  ) : (
    ""
  );
};
