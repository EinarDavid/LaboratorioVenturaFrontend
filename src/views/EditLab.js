import React, { useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import { StateButton } from '../components/Button/StateButton';

import { TextInputDinamic } from '../components/Input/TextInputDinamic';
import Images from '../config/Images';
import { getLaboratorioUno, postModificarLaboratorio } from '../services/laboratorioService';


export const EditLab = () => {

    const navigate = useNavigate();
    const [laboratorio, setLaboratorio] = useState({})
    const [examen, setExamen] = useState({})
    const [cabecera, setCabecera] = useState({})

    // 63c4355ee66964fd6f18ca65
    // 63c4355ee66964fd6f18ca66
    let { labo, exa } = useParams()

    useEffect(() => {
        getLaboratorioUno(labo).then(({ data }) => {
            setLaboratorio(data)
            setExamen(data.ExamenesRealizados.find(ex => ex._id === exa))
        })
    }, [])
    // console.log("laboratorio:", laboratorio, "examen:", examen)

    const handleChangeCabecera = (event) => {
        setCabecera({ ...cabecera, [event.target.name]: event.target.value })
        
    }

    const onSubmit = () => {

        console.log('------', cabecera)
        
        try {
            postModificarLaboratorio(labo, exa, cabecera).then(({ data }) => {
                console.log(data);
                //limpiar cajas, cerrar modal y avisar que fue añadido con exito
                alert(data.mensaje);
            })
        } catch (error) {
            console.log('----', error)
        }
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
                            <div className='row-Dinamic'>
                                {
                                    (examen.Examen) ? examen.Examen.Campos.map((campo, i) =>
                                        
                                            <div key={i} className='containerInputDinamic'>
                                                <TextInputDinamic
                                                    Name={campo._id}
                                                    LabelInput={campo.Nombre}
                                                    Placeholder={'Valor de referencia: ' + campo.ValorReferencia}
                                                    OnChange={(e) => handleChangeCabecera(e)}
                                                />
                                            </div>

                                            
                                        
                                    ) : <></>
                                }


                            </div>

                            <div className='spaceVer30' />
                            <div className='container-Button-Modal'>
                                <button className='ButtonPrimary' onClick={onSubmit}>Registrar</button>
                            </div>

                       

                    </div>
                </div>
            </div>
        </>

    )
}
