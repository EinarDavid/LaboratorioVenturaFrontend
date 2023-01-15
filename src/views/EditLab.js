import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'
import { StateButton } from '../components/Button/StateButton';
import { TextInput } from '../components/Input/TextInput';
import Images from '../config/Images';
import { getLaboratorioUno } from '../services/laboratorioService';

export const EditLab = () => {

    const navigate = useNavigate();
    const [laboratorio, setLaboratorio] = useState({})
    const [examen, setExamen] = useState({})

    // 63c4355ee66964fd6f18ca65
    // 63c4355ee66964fd6f18ca66
    let { labo, exa } = useParams()

    useEffect(() => {
        getLaboratorioUno(labo).then(({ data }) => {
            setLaboratorio(data)
            setExamen(data.ExamenesRealizados.find(ex => ex._id == exa))
        })

    }, [])
    console.log("laboratorio:", laboratorio, "examen:", examen)


    const { register, formState, formState: { errors, isSubmitSuccessful }, reset, handleSubmit } = useForm({
        mode: 'all'
    });

    const onSubmit = (data, e) => {

        // try {
        //     postAgregarPaciente(data).then(({ data }) => {
        //         console.log(data);
        //         reset();
        //         SetModal(false);
        //         //limpiar cajas, cerrar modal y avisar que fue añadido con exito
        //         alert(data.mensaje);
        //     })
        // } catch (error) {
        //     console.log('----', error)
        // }
    };

    return (
        <>

            <div className="App">
                <div className='mainNav'>

                </div>
                <div className='containerPadre'>
                    <div className='containerHijo'>
                        <div className='popup_button_container'>
                            <h1 className='titleStyle'>Resultado de Laboratorio</h1>
                            <button className="button_close"
                                onClick={() => navigate('/searchLab')}
                            >{
                                    <img src={Images.CLOSE} width={30} alt='icon' ></img>
                                } </button>
                        </div>


                        <div className='spaceVer20' />
                        <div className='containerPacDoc'>
                            <div className='selectPac'>


                                <section className='information'>
                                    {
                                        (laboratorio.Paciente) ?
                                            <>
                                                <p className='labelInput'>CI: {laboratorio.Paciente.CI}</p>
                                                <p className='labelInput'>Paciente: {laboratorio.Paciente.NombreCompleto}</p>
                                                <p className='labelInput'>Fecha de Nac: {laboratorio.Paciente.Fecha_de_Nacimiento}</p>
                                                <p className='labelInput'>Fecha de solicitud: {laboratorio.Fecha}</p>

                                            </> :
                                            <>
                                                <p className='labelInput'>CI:</p>
                                                <p className='labelInput'>Paciente: </p>
                                                <p className='labelInput'>Fecha de Nac:</p>
                                            </>
                                    }

                                </section>

                            </div>

                        </div>
                        <div className='spaceVer20' />


                        <form
                            autoComplete="off"
                            onSubmit={handleSubmit(onSubmit)} >
                            <div className='popup_button_container'>
                                <h1 className='titleStyleH2'>Examen</h1>

                                <StateButton
                                    State={examen.Estado}
                                />
                            </div>
                            {
                                (examen.Examen) ?
                                    <>
                                        <p className='labelInput'>Nombre del examen: {examen.Examen.Nombre}</p>
                                        <p className='labelInput'>Categoria: {examen.Examen.Categoria}</p>
                                    </> : <>
                                    </>
                            }
                            <div className='spaceVer20' />
                            <div className='row3-Inputs'>
                                {
                                    (examen.Examen) ? examen.Examen.Campos.map(campo =>
                                        <>
                                            <TextInput
                                                LabelInput={campo.Nombre}
                                                Placeholder={'Valor de referencia: ' + campo.ValorReferencia}
                                                Register={register("Nombres", {
                                                    required: 'El campo es requerido',

                                                })}
                                                ErrorInput={errors.Nombres?.message}
                                            />
                                            
                                            <div className='spaceRow25' />
                                        </>
                                    ) : <></>
                                }


                            </div>

                            <div className='spaceVer30' />
                            <div className='container-Button-Modal'>
                                <button className='ButtonPrimary' type="submit">Registrar</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>

    )
}
