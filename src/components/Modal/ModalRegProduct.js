import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Images from "../../config/Images";

import { RegistroProducto } from "../Forms/RegistroProducto";
import { postAgregarProducto } from "../../services/productService";
import { ModalConfirmation } from "./ModalConfirmation";
import { getProveedorTodos } from "../../services/proveedorService";
import { getGrupoTodos } from "../../services/grupoService";
import { getSubGrupoTodos } from "../../services/subgrupoService";

export const ModalRegProduct = ({ SetModal, modal, callback }) => {
  const [modalConfirmation, setModalConfirmation] = useState(false);
  const [disableButton, setDisableButton] = useState(false);
  const [disableButtonConfirmation, setDisableButtonConfirmation] =
    useState(false);
  const [datos, setDatos] = useState({});
  const [proveedor, setProveedor] = useState();
  const [grupo, setGrupo] = useState();
  const [subGrupo, setSubGrupo] = useState();

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    getValues,
    setValue,
  } = useForm({
    mode: "all",
  });

  const onSubmit = () => {
    setDisableButtonConfirmation(true);
    try {
      console.log("entro a Submit", datos);

      postAgregarProducto(datos).then(({ data }) => {
        console.log(data);
        reset();
        //Habilitas boton
        setDisableButton(false);
        setDisableButtonConfirmation(false);
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
    //console.log("Datos", data)
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

  const _Price = (e) => {
    var data = getValues();
    //console.log("data", data);

    if (data?.PrecioCompra !== "" && data?.PrecioVenta !== "") {
      var Utilidad =
        (Number(data?.PrecioVenta) - Number(data?.PrecioCompra)) * 10;

      setValue("Utilidad", Utilidad);
    }
  };

  useEffect(() => {
    getProveedorTodos().then(({ data }) => {
      setProveedor(data);
    });
    getGrupoTodos().then(({data})=>{
      setGrupo(data);
    });
    getSubGrupoTodos().then(({data})=>{
      setSubGrupo(data);
    });
  }, []);

  return modal ? (
    <>
      <div className="popup_container">
        <div className="popup_itself">
          <div className="popup_button_container">
            <h1 className="titleStyle">Registro de producto</h1>
            <button className="button_close" onClick={() => SetModal(false)}>
              {<img src={Images.CLOSE} width={30} alt="icon"></img>}{" "}
            </button>
          </div>
          <div className="spaceVer20" />

          <RegistroProducto
            handleSubmit={handleSubmit}
            onSubmit={onConfirmation}
            register={register}
            errors={errors}
            disableButton={disableButton}
            _Price={_Price}
            Proveedor = {proveedor}
            Grupo = {grupo}
            Subgrupo = {subGrupo}
          />
        </div>
      </div>

      <ModalConfirmation
        ModalConfirmation={modalConfirmation}
        ValueText={"¿Estas seguro de que quieres registrar el producto?"}
        OnCancel={onCancel}
        OnSubmit={onSubmit}
        DisableButtonConfirmation={disableButtonConfirmation}
      />
    </>
  ) : (
    ""
  );
};
