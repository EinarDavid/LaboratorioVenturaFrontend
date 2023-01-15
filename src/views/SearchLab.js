import React, { useEffect, useState } from 'react'
import { StateButton } from '../components/Button/StateButton'
import { MainNavigator } from '../navigation/MainNavigator'
import { getLaboratorioTodos } from '../services/laboratorioService'

export const SearchLab = () => {
    const [laboratorios, setLaboratorios] = useState([])

    useEffect(() => {
        getLaboratorioTodos().then(({ data }) => setLaboratorios(data))
        
    }, [])

    return (
        <>
            <div className="App">
                <div className='mainNav'>
                    <MainNavigator />
                </div>
                <div className='containerPadre'>
                    <div className='containerHijo'>
                        <h1 className='titleStyle'>Evaluación de examenes</h1>
                        <div className='spaceVer30' />
                        <div className="cardBodyEvaluation">
                            <table className='tableContainer'>
                                <thead>
                                    <tr>
                                        <th className='titleTable'>Nro</th>
                                        <th className='titleTable'>Estado</th>
                                        <th className='titleTable'>Paciente</th>
                                        <th className='titleTable'>C.I.</th>
                                        <th className='titleTable'>Fecha</th>
                                    </tr>

                                </thead>

                                {
                                    laboratorios.map((labo, i) =>

                                        <tbody key={i}>
                                            <tr className='pacTable'>
                                                <td className='titleTable'>{i + 1}</td>
                                                <td className='titleTable'></td>
                                                <td className='titleTable'>{labo.Paciente.NombreCompleto}</td>
                                                <td className='titleTable'>{labo.Paciente.CI}</td>
                                                <td className='titleTable'>{labo.Fecha}</td>
                                            </tr>

                                            {

                                                labo.ExamenesRealizados.map((exa, index) =>

                                                    //http://83.229.86.168:8080/laboratorio/leertodo
                                                    <tr key={index}>
                                                        <td className='titleTable'>{index + 1}</td>
                                                        <td className='titleTable'>
                                                            
                                                            <StateButton
                                                                State={exa.Estado}
                                                                Ruta={labo._id+"/"+exa._id}
                                                            />
                                                        </td>
                                                        <td className='titleTable'>{exa.Examen.Nombre}</td>
                                                        <td className='titleTable'></td>
                                                        <td className='titleTable'></td>
                                                    </tr>


                                                )
                                            }

                                        </tbody>
                                    )
                                }


                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
