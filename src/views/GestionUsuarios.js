

import React, { useEffect, useState } from 'react';
import { MainNavigator } from '../navigation/MainNavigator';

import Images from '../config/Images';

import { ModalRegPaciente } from '../components/Modal/ModalRegPaciente';
import { ButtonFilter } from '../components/Button/ButtonFilter';
import { SelectFilter } from '../components/Input/SelectFilter';
import { calcularEdad } from '../services/calcEdad';
import { ButtonIcon } from '../components/Button/ButtonIcon';

import { getPacientesNombres } from '../services/pacienteService';
import { SectionFilterPac } from '../components/Section/SectionFilterPac';
import { postPacienteBuscar, postPacienteEliminar } from '../services/pacienteService';
import { useNavigate } from 'react-router-dom';


export const GestionUsuarios = () => {
    const navigate = useNavigate();
    const [modalShow, setModalShow] = useState(false);
    const [activeButton, setActiveButton] = useState(false);
    const [search, setSearch] = useState({ Nombre: "", CI: "", CodigoPaciente: "", PrimerApellido: "", SegundoApellido: "", ord: "" });

    const [pacientes, setPacientes] = useState([]);
    console.log('datos search', search)
    const llamarPacientes = () => getPacientesNombres().then(({ data }) => setPacientes(data))
    useEffect(() => {
        llamarPacientes()
    }, [])

    useEffect(() => console.log(pacientes), [pacientes])

    const handleChangeSearch = (event) => {
        //console.log(event.target.value)
        setSearch({ ...search, [event.target.name]: event.target.value })
    }
    useEffect(() => {
        postPacienteBuscar(search).then(({ data }) => setPacientes(data))
    }, [search])

    const eliminarPaciente = (id) => {
        // postPacienteEliminar(id).then(({data})=>console.log(data));
        // llamarPacientes()
        console.log(id)
    }

    const FilterOrder = [{
        option: 'Codigo Ascendente',
        id_option: 1
    },
    {
        option: 'Codigo Descendente',
        id_option: 2
    },
    {
        option: 'Edad Ascendente',
        id_option: 3
    },
    {
        option: 'Edad Descendente',
        id_option: 4
    }
    ];

    return (
        <>
            <div className="App">
                <div className='mainNav'>
                    <MainNavigator></MainNavigator>

                </div>
                <div className='containerPadre'>
                    <div className='containerHijo'>
                        <h1 className='titleStyle'>Gestion de pacientes</h1>
                        <div className='spaceVer10' />
                        <ButtonIcon Image={Images.ADDBLUE} Nombre={'Añadir nuevo paciente'} OnClick={() => setModalShow(true)} />

                        <div className='spaceVer15' />
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

                                            <SectionFilterPac
                                                SearchCI={handleChangeSearch}
                                                SearchCodigoPac={handleChangeSearch}
                                                SearchNombre={handleChangeSearch}
                                                SearchPrimerApellido={handleChangeSearch}
                                                SearchSegundoApellido={handleChangeSearch}
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
                                            <th ></th>
                                            <th className='titleTable'>Nro</th>
                                            <th className='titleTable'>Codigo</th>
                                            <th className='titleTable'>C.I.</th>
                                            <th className='titleTable'>Nombres</th>
                                            <th className='titleTable'>Primer Apellido</th>
                                            <th className='titleTable'>Segundo Apellido</th>
                                            <th className='titleTable'>Edad</th>
                                        </tr>

                                    </thead>
                                    {
                                        pacientes.map((pac, i) =>

                                            <tbody key={i}>
                                                <tr>
                                                    <td >
                                                        <button className='buttonPrint' onClick={() => navigate("/view/paciente/" + pac._id)}>
                                                            <img src={Images.VIEW} width={'25'} alt={'View'} />
                                                        </button>
                                                    </td>
                                                    <td className='containerTable'>{i + 1}</td>
                                                    
                                                    <td className='containerTable'>{pac.CodigoPaciente}</td>
                                                    <td className='containerTable'>{pac.CI}</td>
                                                    <td className='containerTable'>{pac.Nombres}</td>
                                                    <td className='containerTable'>{pac.PrimerApellido}</td>
                                                    <td className='containerTable'>{pac.SegundoApellido}</td>
                                                    <td className='containerTable'>{calcularEdad(pac.Fecha_de_Nacimiento)}</td>

                                                </tr>


                                                
                                            </tbody>
                                            
                                        )
                                    }



                                </table>
                            </div>
                        </div>




                    </div>
                </div>

            </div>
            <ModalRegPaciente modal={modalShow} SetModal={setModalShow} ></ModalRegPaciente>
        </>
    )
}
