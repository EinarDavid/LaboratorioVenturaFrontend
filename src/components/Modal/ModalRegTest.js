import React, { useEffect, useState } from 'react'

import Images from '../../config/Images';
import { postAgregarExamen } from '../../services/examenService';
import { SelectDinamic } from '../Input/SelectDinamic';
import { TextInputDinamic } from '../Input/TextInputDinamic';

export const ModalRegTest = ({ SetModal, modal }) => {

    const [detalle, setDataDetalle] = useState([
        { Nombre: '', ValorReferencia: '', Concentracion: '' },
    ]);
    const [cabecera, setCabecera] = useState({})

    const onSubmit = () => {
        try {
            let data = cabecera;
            data.Campos = detalle;
            console.log(data);
            postAgregarExamen(data).then(({ data }) => {
                console.log(data);
                
                SetModal(false);
                setDataDetalle([
                    { Nombre: '', ValorReferencia: '', Concentracion: '' },
                ])
                //limpiar cajas, cerrar modal y avisar que fue añadido con exito
                alert(data.mensaje);
            })

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

    const handleChangeCabecera = (event) => {
        setCabecera({ ...cabecera, [event.target.name]: event.target.value })
        
    }

    const addInputs = (e) => {
        //e.preventDefault();
        setDataDetalle([...detalle, { Nombre: '', ValorReferencia: '', Concentracion: '' }]);
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
                                            <img src={Images.REMOVE} width={26} alt='remove'></img>
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
                        <button className='ButtonPrimary' type="submit" onClick={onSubmit}>Registrar</button>
                    </div>



                </div>
            </div>
        </>
    ) : ""
}
