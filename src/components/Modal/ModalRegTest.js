import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import Images from '../../config/Images';
import { postAgregarPaciente } from '../../services/pacienteService';
import { Select } from '../Input/Select';
import { TextInput } from '../Input/TextInput';
import { TextInputDinamic } from '../Input/TextInputDinamic';

export const ModalRegTest = ({ SetModal, modal }) => {
    const [detalle, setDataDetalle] = useState([
        { Nombre: '', ValorReferencia: '', Concentracion: '' },
    ]);

    const { register, formState, formState: { errors, isSubmitSuccessful }, reset, handleSubmit } = useForm({
        mode: 'all'
    });

    const onSubmit = (data, e) => {
        try {
            data.Campos = detalle;
            console.log(detalle);
            console.log(data);
            /*postAgregarPaciente(data).then(({ data }) => {
            console.log(data);
            reset();
            SetModal(false);
            //limpiar cajas, cerrar modal y avisar que fue añadido con exito
            alert(data.mensaje);})*/

        } catch (error) {
            console.log('----', error)
        }
    };
    const Categoria = [{
        option: 'Hemograma',
        id_option: 1
    },
    {
        option: 'Grupo Sanguineo',
        id_option: 2
    },
    {
        option: 'Inmunologia',
        id_option: 3
    },
    {
        option: 'Química Sanguínea',
        id_option: 4
    },
    {
        option: 'Serologia',
        id_option: 5
    }];

    const addInputs = (e) => {
        //e.preventDefault();

        setDataDetalle([...detalle, { Nombre: '', ValorReferencia: '', Concentracion: '' }]);

    }
    const handleChangeNombre = (event, index) => {
        //detalle[index].Nombre = e.target.value;
        //setDataDetalle([...detalle]);
        //console.log(detalle);
        let campos = [...detalle]
        campos[index][event.target.name] = event.target.value;

        setDataDetalle(campos);

    }
    const handleRemoveInputRol = (position) => {
        setDataDetalle([...detalle.filter((_, index) => index !== position)]);

    }
    useEffect(() => {
        setDataDetalle(detalle)

    }, [detalle])

    return (modal) ? (
        <>
            <div className='popup_container'>
                <div className='popup_itself'>
                    <form
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)} >
                        <div className='popup_button_container'>
                            <h1 className='titleStyle'>Registro de examen</h1>
                            <button className="button_close" onClick={() => SetModal(false)}>{
                                <img src={Images.CLOSE} width={30} alt='icon' ></img>
                            } </button>
                        </div>

                        <div className='spaceVer30' />
                        <div className='row3-Inputs'>
                            <TextInput
                                LabelInput={'Nombre*'}
                                Placeholder={'Ej. Hepatitis B'}
                                Register={register("Nombre", {

                                    pattern: {
                                        required: 'El campo es requerido',
                                        value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                        message: 'Solo se permiten letras'
                                    }
                                })}
                                ErrorInput={errors.Nombre?.message}
                            />
                            <div className='spaceRow25' />
                            <Select

                                LabelInput={'Categoría*'}
                                Placeholder={'Selecciona la Categoría'}
                                SelectOption={Categoria}

                                Register={register("Categoria", {
                                    required: 'El campo es requerido',
                                })}
                                ErrorInput={errors.Categoria?.message}

                            />
                            <div className='spaceRow25' />
                            <TextInput

                                LabelInput={'Método'}
                                Placeholder={'Ej. Hepatitis B'}
                                Register={register("Metodo", {

                                    pattern: {
                                        required: 'El campo es requerido',
                                        value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                        message: 'Solo se permiten letras'
                                    }
                                })}
                                ErrorInput={errors.Metodo?.message}
                            />
                        </div>

                        <div className='spaceVer30' />

                        {

                            detalle.map((det, i) => {
                                return (
                                    < div key={i}>
                                        <div className='row3-Inputs'>

                                            <TextInputDinamic
                                                Name={'Nombre'}
                                                LabelInput={'Nombre'}
                                                Placeholder={'Ej. Eritrocitos'}
                                                OnChange={(e) => handleChangeNombre(e, i)}
                                                value={det.Nombre}
                                            />
                                            <div className='spaceRow20' />
                                            <TextInputDinamic
                                                Name={'ValorReferencia'}
                                                LabelInput={'Valor de Referencia'}
                                                Placeholder={'Ej. 13 - 18'}
                                                OnChange={(e) => handleChangeNombre(e, i)}
                                                value={det.ValorReferencia}
                                            />
                                            <div className='spaceRow20' />
                                            <TextInputDinamic
                                                Name={'Concentracion'}
                                                LabelInput={'Concentración'}
                                                Placeholder={'Ej. g/dl'}
                                                OnChange={(e) => handleChangeNombre(e, i)}
                                                value={det.Concentracion}
                                            />
                                            <button
                                                className='buttonRemoveRow'
                                                style={{ marginLeft: '5px' }}
                                                onClick={() => { handleRemoveInputRol(i) }}
                                            >
                                                <img  src={Images.REMOVE} width={26} alt='remove'></img>
                                            </button>
                                        </div>
                                        <div className='spaceVer15' />
                                    </div>
                                )
                            })

                        }
                        
                        <div >
                            <button className='buttonAddForm' onClick={addInputs} >Click aquí para añadir un nuevo rol</button>
                        </div>



                        <div className='spaceVer30' />
                        <div className='container-Button-Modal'>
                            <button className='ButtonPrimary' type="submit">Registrar</button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    ) : ""
}
