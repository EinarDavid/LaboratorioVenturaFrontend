import React, { useEffect, useState } from 'react'

import Images from '../../config/Images';
import { postAgregarExamen } from '../../services/examenService';
import { ButtonPrimary } from '../Button/ButtonPrimary';
import { SelectDinamic } from '../Input/SelectDinamic';
import { TextInputDinamic } from '../Input/TextInputDinamic';

export const ModalRegTest = ({ SetModal, modal, callback }) => {
    const [disableButton, setDisableButton] = useState(false);

    const [detalle, setDataDetalle] = useState([
        { Nombre: '', ValorReferencia: '', Concentracion: '', SubCategoria: '' },
    ]);
    const [cabecera, setCabecera] = useState({})

    const onSubmit = () => {
        try {
            setDisableButton(true)
            let data = cabecera;
            data.Campos = detalle;
            console.log(data);
            postAgregarExamen(data).then(({ data }) => {
                console.log(data);
                setDisableButton(false);
                SetModal(false);
                if (callback) callback()
                setDataDetalle([
                    { Nombre: '', ValorReferencia: '', Concentracion: '', SubCategoria: '' },
                ])
                //limpiar cajas, cerrar modal y avisar que fue añadido con exito
                
                alert(data.mensaje);
            })

        } catch (error) {
            console.log('----', error)
        }
    };
    const Categoria = [{
        option: 'Hematología',
        id_option: 1
    },
    {
        option: 'Química Sanguínea',
        id_option: 2
    },
    {
        option: 'InmunologÍa',
        id_option: 3
    },
    {
        option: 'Química Sanguínea',
        id_option: 4
    },
    {
        option: 'SerologÍa',
        id_option: 5
    }];
    const SubCategoria = [{
        option: 'SERIE ROJA',
        id_option: 1
    },
    {
        option: 'SERIE BLANCA',
        id_option: 2
    },
    {
        option: 'FORMULA LEUCOCITARIA',
        id_option: 3
    },
    ]

    const handleChangeCabecera = (event) => {
        setCabecera({ ...cabecera, [event.target.name]: event.target.value })

    }

    const addInputs = (e) => {
        //e.preventDefault();
        setDataDetalle([...detalle, { Nombre: '', ValorReferencia: '', Concentracion: '', SubCategoria: ''}]);
    }
    const handleChangeNombre = (event, index) => {

        let campos = [...detalle]
        campos[index][event.target.name] = event.target.value;

        setDataDetalle(campos);

    }
    const handleRemoveInputRol = (position) => {
        setDataDetalle([...detalle.filter((_, index) => index !== position)]);

    }
    useEffect(() => {
        setDataDetalle(detalle)

    }, [detalle]);


    return (modal) ? (
        <>
            <div className='popup_container'>
                <div className='popup_itself'>

                    <div className='popup_button_container'>
                        <h1 className='titleStyle'>Registro de examen</h1>
                        <button className="button_close" onClick={() => SetModal(false)}>{
                            <img src={Images.CLOSE} width={30} alt='icon' ></img>
                        } </button>
                    </div>

                    <div className='spaceVer30' />
                    <div className='row3-Inputs'>

                        <TextInputDinamic
                            Name={'Nombre'}
                            LabelInput={'Nombre*'}
                            Placeholder={'Ej. Hepatitis B'}
                            OnChange={(e) => handleChangeCabecera(e)}

                        />
                        <div className='spaceRow25' />

                        <SelectDinamic
                            Name={'Categoria'}
                            LabelInput={'Categoría*'}
                            Placeholder={'Selecciona la Categoría'}
                            SelectOption={Categoria}
                            OnChange={(e) => handleChangeCabecera(e)}
                        />
                        <div className='spaceRow25' />

                        <TextInputDinamic
                            Name={'Metodo'}
                            LabelInput={'Método'}
                            Placeholder={'Ej. Hepatitis B'}
                            OnChange={(e) => handleChangeCabecera(e)}

                        />
                    </div>

                    <div className='spaceVer20' />

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
                                            Placeholder={'Ej. 13 - 18 *Separar con -'}
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
                                        <div className='spaceRow20' />
                                        <SelectDinamic
                                            Name={'SubCategoria'}
                                            LabelInput={'SubCategoría'}
                                            Placeholder={'Sin SubCategoria'}
                                            SelectOption={SubCategoria}
                                            OnChange={(e) => handleChangeNombre(e, i)}
                                        />
                                        <button
                                            className='buttonRemoveRow'
                                            style={{ marginLeft: '5px' }}
                                            onClick={() => { handleRemoveInputRol(i) }}
                                        >
                                            <img src={Images.REMOVE} width={26} alt='remove'></img>
                                        </button>
                                    </div>
                                    <div className='spaceVer15' />
                                </div>
                            )
                        })

                    }

                    <div className='AddInputContainer'>
                        <button className='buttonAddForm' onClick={addInputs} >Click aquí para añadir un nuevo campo</button>
                    </div>



                    <div className='spaceVer30' />

                    <ButtonPrimary Nombre={'REGISTRAR'} Disabled={disableButton} OnClick={onSubmit} />



                </div>
            </div>
        </>
    ) : ""
}
