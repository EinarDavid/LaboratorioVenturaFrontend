import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Images from '../../config/Images';
import { postAgregarPaciente } from '../../services/pacienteService';

import { RegistroProducto } from '../Forms/RegistroProducto';
import { postAgregarProducto } from '../../services/productService';

export const ModalRegProduct = ({ SetModal, modal, callback }) => {

    const [disableButton, setDisableButton] = useState(false);
    const [product, setProduct] = useState({});

    const { register, formState, formState: { errors, isSubmitSuccessful }, reset, handleSubmit } = useForm({
        mode: 'all'
    });

    const onSubmit = ( e) => {
        try {
            console.log(product);
            setDisableButton(true);

            postAgregarProducto(product).then(({ data }) => {
                console.log(data);
                reset();
                //Habilitas boton
                setDisableButton(false);
                SetModal(false);
                if (callback) callback()
                //limpiar cajas, cerrar modal y avisar que fue añadido con exito
                alert(data.mensaje);
                setProduct({});
            })

        } catch (error) {
            alert(error)
            console.log('----', error)
        }
    };
    
    const handleChangeForm = (event) => {
        console.log(event.target.name, event.target.value)
        
        setProduct({ ...product, [event.target.name]: event.target.value })
    
    }   

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            // console.log('Entro a reset')
            //reset()
        }
    }, [formState, reset])

    return (modal) ? (
        <>
            <div className='popup_container'>
                <div className='popup_itself'>
                    <div className='popup_button_container'>
                        <h1 className='titleStyle'>Registro de producto</h1>
                        <button className="button_close" onClick={() => SetModal(false)}>{
                            <img src={Images.CLOSE} width={30} alt='icon' ></img>
                        } </button>
                    </div>
                    <div className='spaceVer20' />

                    <RegistroProducto

                        product={product}
                        handleSubmit={handleSubmit}
                        onSubmit={onSubmit}
                        register={register}
                        errors={errors}
                        disableButton={disableButton}
                        handleChangeForm={handleChangeForm}
                    />

                </div>
            </div>
        </>
    ) : ""
}
