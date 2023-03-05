import React, { useEffect } from 'react'
import Images from '../../config/Images';
import { ButtonPrimary } from '../Button/ButtonPrimary';
import { SelectDinamic } from '../Input/SelectDinamic';
import { TextInputDinamic } from '../Input/TextInputDinamic';

export const RegistroExamen2 = ({
    cabecera,
    detalle,
    handleChangeCabecera,
    handleRemoveInputRol,
    handleChangeNombre,
    handleChangeRef,
    handleRemoveInputRolRef,
    addInputsRef,
    addInputs,
    disableButton,
    onSubmit

}) => {
    useEffect(() => {
        console.log('detalle:', detalle)
    }, [detalle])

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
    return (
        <>
            <div className='row3-Inputs'>

                <TextInputDinamic
                    Name={'Nombre'}
                    LabelInput={'Nombre*'}
                    Placeholder={'Ej. Hepatitis B'}
                    OnChange={(e) => handleChangeCabecera(e)}
                    Value={cabecera?.Nombre || ""}
                />
                <div className='spaceRow25' />

                <SelectDinamic
                    Name={'Categoria'}
                    LabelInput={'Categoría*'}
                    Placeholder={'Selecciona la Categoría'}
                    SelectOption={Categoria}
                    OnChange={(e) => handleChangeCabecera(e)}
                    Value={cabecera?.Categoria || ""}
                />
                <div className='spaceRow25' />

                <TextInputDinamic
                    Name={'Metodo'}
                    LabelInput={'Método'}
                    Placeholder={'Ej. Cromatografia'}
                    OnChange={(e) => handleChangeCabecera(e)}
                    Value={cabecera?.Metodo || ""}

                />
            </div>
            <div className='spaceVer15' />
            <div className='row3-Inputs'>

                <TextInputDinamic
                    Name={'Recipiente'}
                    LabelInput={'Recipiente'}
                    Placeholder={'Ej. Tubo Gris'}
                    OnChange={(e) => handleChangeCabecera(e)}
                    Value={cabecera?.Recipiente || ""}

                />
                <div className='spaceRow25' />
                <TextInputDinamic
                    Name={'Muestra'}
                    LabelInput={'Muestra'}
                    Placeholder={'Ej. Suero'}
                    OnChange={(e) => handleChangeCabecera(e)}
                    Value={cabecera?.Muestra || ""}

                />
                <div className='spaceRow25' />

                <TextInputDinamic
                    Name={'Gastos'}
                    LabelInput={'Gastos de Insumo'}
                    Placeholder={'Ej. 20%'}
                    OnChange={(e) => handleChangeCabecera(e)}
                    Value={cabecera?.Gastos || ""}
                />
            </div>
            <div className='spaceVer15' />
            <div className='row2-Inputs'>

                <TextInputDinamic
                    Name={'Precio'}
                    LabelInput={'Precio del Laboratorio'}
                    Placeholder={'Ej. 10'}
                    OnChange={(e) => handleChangeCabecera(e)}
                    Value={cabecera?.Precio || ""}
                />
                <div className='spaceRow25' />
                <TextInputDinamic
                    Name={'InformacionClinica'}
                    LabelInput={'Información clínica'}
                    Placeholder={'Ej. Suero'}
                    OnChange={(e) => handleChangeCabecera(e)}
                    Value={cabecera?.InformacionClinica || ""}
                />

            </div>

            <div className='spaceVer15' />

            <h1 className='titleStyleH2'>Campos</h1>
            <div className='spaceVer15' />
            {
                detalle.map((det, i) =>
                    <div key={det.id}>
                        <div className='containerCampo'>
                            <div className='row3-Inputs'>
                                {
                                    (det._id) ? <>
                                        <button
                                            disabled
                                            className='buttonRemoveRowDisabled'
                                            style={{ marginLeft: '5px' }}
                                            onClick={() => { handleRemoveInputRol(i) }}
                                        >
                                            <img src={Images.REMOVE} width={26} alt='remove'></img>
                                        </button>
                                    </> : <>
                                        <button

                                            className='buttonRemoveRow'
                                            style={{ marginLeft: '5px' }}
                                            onClick={() => { handleRemoveInputRol(i) }}
                                        >
                                            <img src={Images.REMOVE} width={26} alt='remove'></img>
                                        </button>
                                    </>
                                }


                                <div className='spaceRow5' />
                                <TextInputDinamic
                                    Name={'Nombre'}
                                    LabelInput={'Nombre'}
                                    Placeholder={'Ej. Eritrocitos'}
                                    OnChange={(e) => handleChangeNombre(e, i)}
                                    Value={det.Nombre || ""}
                                />
                                <div className='spaceRow20' />
                                <SelectDinamic
                                    Name={'SubCategoria'}
                                    LabelInput={'SubCategoría'}
                                    Placeholder={'Sin SubCategoria'}
                                    SelectOption={SubCategoria}
                                    OnChange={(e) => handleChangeNombre(e, i)}
                                    Value={det.SubCategoria || ""}
                                />

                            </div>
                            <div className='spaceVer10' />
                            {
                                det.ValorReferencia.map((val, index) => {
                                    //console.log("Valores de Referencia:", val, index)
                                    return (
                                        <div key={val.id}>
                                            <div className='row3-Inputs' >
                                                <div className='containerEdad'>

                                                    <TextInputDinamic
                                                        Name={'EdadMinima'}
                                                        LabelInput={'Edad mínima'}
                                                        Placeholder={'*Ej. 10'}
                                                        OnChange={(e) => handleChangeRef(e, i, index)}
                                                        Value={val.EdadMinima || ""}
                                                    />
                                                    <div className='spaceRow10' />
                                                    <TextInputDinamic
                                                        Name={'EdadMaxima'}
                                                        LabelInput={'Edad máxima'}
                                                        Placeholder={'*Ej. 20'}
                                                        OnChange={(e) => handleChangeRef(e, i, index)}
                                                        Value={val.EdadMaxima || ""}
                                                    />
                                                    <div className='spaceRow10' />
                                                    <TextInputDinamic
                                                        Name={'Concentracion'}
                                                        LabelInput={'Concentración'}
                                                        Placeholder={'Ej. g/dl'}
                                                        OnChange={(e) => handleChangeRef(e, i, index)}
                                                        Value={val.Concentracion || ""}
                                                    />
                                                </div>
                                                <div className='spaceRow10' />

                                                <TextInputDinamic
                                                    Name={'ValoresReferenciaHombre'}
                                                    LabelInput={'Valores de referencia Hombre'}
                                                    Placeholder={'*Separar valores con -'}
                                                    OnChange={(e) => handleChangeRef(e, i, index)}
                                                    Value={val.ValoresReferenciaHombre || ""}
                                                />
                                                <div className='spaceRow10' />
                                                <TextInputDinamic
                                                    Name={'ValoresReferenciaMujer'}
                                                    LabelInput={'Valores de referencia Mujer'}
                                                    Placeholder={'*Separar valores con -'}
                                                    OnChange={(e) => handleChangeRef(e, i, index)}
                                                    Value={val.ValoresReferenciaMujer || ""}
                                                />
                                                <div className='spaceRow5' />
                                                {
                                                    (val._id) ? <>
                                                        <button
                                                            disabled
                                                            className='buttonRemoveRowDisabled'
                                                            style={{ marginLeft: '5px' }}
                                                            onClick={() => { handleRemoveInputRolRef(i, index) }}
                                                        >
                                                            <img src={Images.REMOVE} width={26} alt='remove'></img>
                                                        </button>
                                                    </> : <>
                                                        <button
                                                            className='buttonRemoveRow'
                                                            style={{ marginLeft: '5px' }}
                                                            onClick={() => { handleRemoveInputRolRef(i, index) }}
                                                        >
                                                            <img src={Images.REMOVE} width={26} alt='remove'></img>
                                                        </button>
                                                    </>
                                                }
                                            </div>
                                            <div className='spaceVer10' />

                                        </div>
                                    )
                                })
                            }
                            <div className='AddInputContainer'>
                                <button className='buttonAddForm'
                                    onClick={e => addInputsRef(i)}
                                >
                                    <img src={Images.ADDBLUE2} width={30} alt='add' />
                                    Añadir valor de referencia
                                </button>
                            </div>

                        </div>
                        <div className='spaceVer15' />

                    </div>

                )

            }

            <div className='AddInputContainer'>
                <button className='buttonAddForm' onClick={addInputs} >
                    <img src={Images.ADDBLUE2} width={30} alt='add' />
                    Añadir campo
                </button>
            </div>



            <div className='spaceVer30' />

            <ButtonPrimary Nombre={'REGISTRAR'} Disabled={disableButton} OnClick={onSubmit} />
        </>
    )

}
