import React, { useEffect, useState } from 'react'
import { ButtonFilter } from '../components/Button/ButtonFilter'
import { StateButton } from '../components/Button/StateButton'
import { SelectFilter } from '../components/Input/SelectFilter'
import { SectionFilter } from '../components/Section/SectionFilter'
import Images from '../config/Images'
import { MainNavigator } from '../navigation/MainNavigator'
import { calcularEdad } from '../services/calcEdad'
import { laboratorioCompletado } from '../services/estadoLabo';
import { postLaboratorioBuscar, getLaboratorioTodos, getLaboratorioImprimir } from '../services/laboratorioService'

export const SearchLab = () => {
    const [laboratorios, setLaboratorios] = useState([]);
    const [activeButton, setActiveButton] = useState(false);
    const [search, setSearch] = useState({ Nombre: "", CI: "", CodigoPaciente: "", Estado: "", ord: "" });



    const handleChangeSearch = (event) => {
        //console.log(event.target.value)
        setSearch({ ...search, [event.target.name]: event.target.value })

    }
    useEffect(() => {
        getLaboratorioTodos().then(({ data }) => setLaboratorios(data))


    }, [])
    useEffect(() => {
        //console.log('---', search)
        postLaboratorioBuscar({ ...search }).then(({ data }) => setLaboratorios(data))

    }, [search])

    const FilterOrder = [{
        option: 'Codigo Ascendente',
        id_option: 1
    },
    {
        option: 'Codigo Descendente',
        id_option: 2
    },
    {
        option: 'Mas recientes',
        id_option: 3
    }];

    const onPrint = (e, pac) => {

        console.log('PrintPress', pac)
        getLaboratorioImprimir(pac)//.then(({ data }) => console.log(data))
    }
    return (
        <>
            <div className="App">
                <div className='mainNav'>
                    <MainNavigator />
                </div>
                <div className='containerPadre'>
                    <div className='containerHijo'>
                        <h1 className='titleStyle'>Evaluación de examenes</h1>
                        <div className='spaceVer20' />
                        <div className='containerFiltro'>
                            <ButtonFilter
                                Nombre={'Filtros'}
                                OnClick={() => { setActiveButton(!activeButton) }}
                                Active={activeButton}
                            />
                            <div className='spaceRow15' />

                            <SelectFilter
                                Name={'ord'}
                                Placeholder={'Ordenar Por'}
                                SelectOption={FilterOrder}
                                OnChange={(e) => handleChangeSearch(e)}
                            />
                            <div className='spaceRow25' />
                        </div>
                        <div className='spaceVer20' />
                        <div className='tablePadreContainer'>
                            {
                                (activeButton) ? (
                                    <>
                                        <div className='containerFiltros'>


                                            <SectionFilter
                                                SearchCI={handleChangeSearch}
                                                SearchCodigoPac={handleChangeSearch}
                                                SearchNombre={handleChangeSearch}
                                                SearchEstado={handleChangeSearch}
                                            />
                                        </div>
                                        <div className='spaceRow15' /></>
                                ) : (
                                    <></>
                                )
                            }

                            <div className="cardBodyEvaluation">
                                <table className='tableContainer'>
                                    <thead>
                                        <tr>
                                            <th className='titleTable'>Nro</th>
                                            <th className='titleTable'>Estado</th>
                                            <th className='titleTable'>Código</th>
                                            <th className='titleTable'>Paciente</th>
                                            <th className='titleTable'>C.I.</th>
                                            <th className='titleTable'>Edad</th>
                                            <th className='titleTable'>Fecha</th>
                                        </tr>

                                    </thead>

                                    {
                                        laboratorios.map((labo, i) =>

                                            <tbody key={i}>
                                                <tr className='pacTable'>
                                                    <td className='containerTable'>{i + 1}</td>
                                                    <td className='containerTable'></td>
                                                    <td className='containerTable'>{labo.Paciente.CodigoPaciente}</td>
                                                    <td className='containerTable'>{labo.Paciente.NombreCompleto}</td>
                                                    <td className='containerTable'>{labo.Paciente.CI}</td>
                                                    <td className='containerTable'>{calcularEdad(labo.Paciente.Fecha_de_Nacimiento)}</td>
                                                    <td className='containerTable'>{labo.Fecha}</td>
                                                    {
                                                        (laboratorioCompletado(labo) ?
                                                            <td >
                                                                <button className='buttonPrint' onClick={(e) => onPrint(e, labo._id)}>
                                                                    <img src={Images.DOWNLOAD} width={'30'} alt={'Print'}/>
                                                                </button>
                                                            </td>
                                                            : <></>
                                                        )
                                                    }
                                                </tr>

                                                {

                                                    labo.ExamenesRealizados.map((exa, index) =>

                                                        //http://83.229.86.168:8080/laboratorio/leertodo
                                                        <tr key={index}>
                                                            <td className='containerTable'>{index + 1}</td>
                                                            <td className='containerTable'>

                                                                <StateButton
                                                                    State={exa.Estado}
                                                                    Ruta={labo._id + "/" + exa._id}
                                                                />
                                                            </td>
                                                            <td className='containerTable'>{exa.Examen.Nombre}</td>
                                                            <td className='containerTable'></td>
                                                            <td className='containerTable'></td>
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
            </div>

        </>
    )
}
