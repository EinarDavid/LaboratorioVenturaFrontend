import React, { useEffect, useState } from 'react'
import { SearchInput } from '../components/Input/SearchInput'
import { ModalRegPaciente } from '../components/Modal/ModalRegPaciente';
import Images from '../config/Images';
import { MainNavigator } from '../navigation/MainNavigator'
import { getPacientesNombres } from '../services/pacienteService';
import { getExamenTodos } from '../services/examenService';
import { postAgregarLaboratorio } from '../services/laboratorioService';

import { TextInputDinamic } from '../components/Input/TextInputDinamic';

export const NewLab = () => {
    const [pacientes, setPacientes] = useState([]);
    const [pacienteFinded, setPacienteFinded] = useState({});
    const [examenes, setExamenes] = useState([]);
    const [examenFinded, setExamenFinded] = useState([]);
    const [exameneSelected, setExameneSelected] = useState([]);
    const [modalShow, setModalShow] = useState(false);
    const [detalle, setDataDetalle] = useState();

    const [render, setRender] = useState(true);


    useEffect(() => {
        getPacientesNombres().then(({ data }) => setPacientes(data))
        getExamenTodos().then(({ data }) => setExamenes(data))
    }, [])

    const _onSubmit = () => {
        const fecha = new Date();
        const a = fecha.getFullYear();
        const m = fecha.getMonth() + 1;
        const d = fecha.getDate();
        const fechaActual = `${d}-${m}-${a}`;
        if(pacienteFinded && exameneSelected[0])
        {
            let laboratorio = {
                examenes: exameneSelected,
                paciente: pacienteFinded,
                motivo: detalle.Motivo,
                Fecha: fechaActual,
            }
            postAgregarLaboratorio(laboratorio).then(({ data }) => {
                console.log(data);
                alert(data.mensaje);
                setRender(!render)
                setPacienteFinded([])
                setExamenFinded([])
                setExameneSelected([])
                //limpiar cajas, cerrar modal y avisar que fue añadido con exito
            })
        }
        else
        {
            alert("Selecciona un paciente y examenes a realizar")
        }
    }
    const handleChangeNombre = (event) => {
        setDataDetalle({ ...detalle, [event.target.name]: event.target.value })
        
    }

    return (
        <>
            <div className="App" key={render}>
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
                                <h2 className='titleStyleH2'>Examenes</h2>
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

                                <div className='containerResultados'>

                                    {examenFinded.map((ex, i) =>
                                        <div className='resultadosSearch' key={i}>
                                            <ol className='olList'>
                                                <li className="resultadosLista">{ex.Nombre}</li>
                                            </ol>
                                            <ol className='olList'>
                                                <li className="resultadosLista">{ex.Categoria}</li>
                                            </ol>
                                            <ol className='olList'>
                                                <li className="resultadosLista">{ex.Metodo}</li>
                                            </ol>
                                            <ol className='olList'>
                                                <button className='buttonTable'
                                                    onClick={() => { if (!exameneSelected.find(a => a._id === ex._id)) setExameneSelected([...exameneSelected, ex]); }}>
                                                    <img src={Images.ADDBLUE} width={30} height={30}  alt={'icon'}></img>
                                                </button>
                                            </ol>
                                        </div>
                                    )}


                                </div>
                                <div className='spaceVer15' />



                                <div className="cardBody">
                                    <table className='tableContainer'>
                                        <thead>
                                            <tr>
                                                <th className='titleTable'>Nombre</th>
                                                <th className='titleTable'>Categoria</th>
                                                <th className='titleTable'>Metodo</th>
                                            </tr>

                                        </thead>

                                        <tbody>
                                            {exameneSelected.map((ex, i) =>
                                                <>
                                                    <tr key={i}>
                                                        <td className='titleTable'>{ex.Nombre}</td>
                                                        <td className='titleTable'>{ex.Categoria}</td>
                                                        <td className='titleTable'>{ex.Metodo}</td>
                                                        <td className='titleTable'>
                                                            <button className='buttonTable'
                                                                onClick={() => {
                                                                    setExameneSelected(exameneSelected.filter(a => a._id !== ex._id));
                                                                }}>
                                                                <img src={Images.DELETE} width={30} height={30} alt={'icon'}></img>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </>
                                            )}



                                        </tbody>
                                    </table>
                                </div>

                                <div className='spaceVer15' />
                                <button onClick={_onSubmit} className='ButtonPrimary'>Guardar</button>
                            </div>
                        </div>
                        <div className='section2Lab'>
                            <div className='containerLab2'>

                                <h2 className='titleStyleH2'>Datos adicionales</h2>
                                <div className='spaceVer30' />
                                <TextInputDinamic
                                    Name={'Motivo'}
                                    LabelInput={'Motivo'}
                                    Placeholder={'Ej. Examen anual'}
                                    OnChange={(e) => handleChangeNombre(e)}
                                    value={''}
                                />

                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <ModalRegPaciente modal={modalShow} SetModal={setModalShow} ></ModalRegPaciente>
        </>
    )
}
