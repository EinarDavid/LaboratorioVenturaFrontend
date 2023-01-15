import React, { useEffect, useState } from 'react'
import { SearchInput } from '../components/Input/SearchInput'
import { ModalRegPaciente } from '../components/Modal/ModalRegPaciente';
import Images from '../config/Images';
import { MainNavigator } from '../navigation/MainNavigator'
import { getPacientesNombres } from '../services/pacienteService';
import { getExamenTodos } from '../services/examenService';

export const NewLab = () => {
    const [pacientes, setPacientes] = useState([]);
    const [pacienteFinded, setPacienteFinded] = useState({});
    const [examenes, setExamenes] = useState([]);
    const [examenFinded, setExamenFinded] = useState([]);
    const [exameneSelected, setExameneSelected] = useState([]);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        getPacientesNombres().then(({ data }) => setPacientes(data))
        getExamenTodos().then(({ data }) => setExamenes(data))
    }, [])

    const _onSubmit = () => {

    }

    return (
        <>
            <div className="App">
                <div className='mainNav'>
                    <MainNavigator />
                </div>
                <div className='containerPadre'>

                    <div className='sections'>
                        <div className='section1Lab'>
                            <div className='containerHijo'>

                                <h1 className='titleStyle'>Nuevo Laboratorio</h1>
                                <div className='spaceVer20' />
                                <div className='containerPacDoc'>
                                    <div className='selectPac'>

                                        <SearchInput
                                            LabelInput={'Carnet del paciente'}
                                            Placeholder={'Ej. 9367431'}
                                            Image={Images.ADD}
                                            onClick={() => setModalShow(true)}
                                            Data={pacientes}
                                            Key={"CI"}
                                            Find={(finded) => { if (finded[0]) setPacienteFinded(finded[0]); else setPacienteFinded({}) }}
                                        ></SearchInput>
                                        <section className='information'>
                                            <p className='labelInput'>CI: {pacienteFinded.CI}</p>
                                            <p className='labelInput'>Paciente: {pacienteFinded.NombreCompleto}</p>
                                            <p className='labelInput'>Fecha de Nac: {pacienteFinded.Fecha_de_Nacimiento}</p>

                                        </section>

                                    </div>
                                    <div className='spaceRow20' />
                                    <div className='selectDoc'>
                                        <h1 className='titleStyle'>Nuevo Laboratorio</h1>
                                    </div>
                                </div>
                                <div className='spaceVer20' />
                                <h1 className='titleStyle'>Examenes</h1>
                                <div className='spaceVer15' />
                                <SearchInput
                                    LabelInput={'Ingresa el nombre del Examen*'}
                                    Placeholder={'Ej. Inmunologia'}
                                    Image={Images.ADD}
                                    onClick={() => setModalShow(true)}
                                    Data={examenes}
                                    Key={"Nombre"}
                                    Find={(finded) => { setExamenFinded(finded); }}

                                ></SearchInput>

                                <div className='resultadosSearch'>
                                    <ol >
                                        {examenFinded.map(ex =>
                                            <>
                                                <li class="resultadosLista">{ex.Nombre}</li>
                                                <button onClick={() => { if (!exameneSelected.find(a => a._id === ex._id)) setExameneSelected([...exameneSelected, ex]); }}>Añadir examen</button>
                                            </>
                                        )}

                                    </ol>
                                </div>
                                <div className='spaceVer15' />



                                <div className="cardBody">
                                    <table className='tableContainer'>
                                        <thead>
                                            <tr>
                                                <th className='titleTable'>Nombre del examen</th>
                                                <th className='titleTable'>Acción</th>
                                            </tr>

                                        </thead>
                                        <div className='spaceVer5' />
                                        <tbody>
                                            {exameneSelected.map((ex, i) =>
                                                <>
                                                    <tr key={i}>
                                                        <td className='titleTable'>{ex.Nombre}</td>
                                                        <td className='titleTable'>
                                                            <button onClick={() => {
                                                                setExameneSelected(exameneSelected.filter(a => a._id !== ex._id));
                                                            }}>Eliminar</button>
                                                        </td>
                                                    </tr>
                                                </>
                                            )}



                                        </tbody>
                                    </table>
                                </div>

                                <div className='spaceVer15' />
                                <button onClick={_onSubmit} className='ButtonPrimary' >Guardar</button>
                            </div>
                        </div>
                        <div className='section2Lab'>
                            <div className='containerLab2'>

                                <h1 className='titleStyle'>Método de pago</h1>
                                <div className='spaceVer30' />

                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <ModalRegPaciente modal={modalShow} SetModal={setModalShow} ></ModalRegPaciente>
        </>
    )
}
