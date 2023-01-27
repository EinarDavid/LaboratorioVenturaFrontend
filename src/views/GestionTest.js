import React, { useState } from 'react'
import { ButtonFilter } from '../components/Button/ButtonFilter';
import { ButtonIcon } from '../components/Button/ButtonIcon';
import { SearchInput } from '../components/Input/SearchInput';
import { SelectFilter } from '../components/Input/SelectFilter';
import { ModalRegTest } from '../components/Modal/ModalRegTest';
import { SectionFilterPac } from '../components/Section/SectionFilterPac';
import Images from '../config/Images';
import { MainNavigator } from '../navigation/MainNavigator'

export const GestionTest = () => {
    const [modalShow, setModalShow] = useState(false);
    const [activeButton, setActiveButton] = useState(false);
    const [search, setSearch] = useState({ Nombre: "", CI: "", CodigoPaciente: "", PrimerApellido: "", SegundoApellido: "", ord: "" });

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

    const handleChangeSearch = (event) => {
        //console.log(event.target.value)
        setSearch({ ...search, [event.target.name]: event.target.value })
    }

    return (
        <>
            <div className="App">
                <div className='mainNav'>
                    <MainNavigator />
                </div>
                <div className='containerPadre'>
                    <div className='containerHijo'>
                        <h1 className='titleStyle'>Gesion de Examenes</h1>
                        <div className='spaceVer10' />
                        <ButtonIcon Image={Images.ADDBLUE} Nombre={'Añadir nuevo examen'} OnClick={() => setModalShow(true)} />
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
                        </div>
                    </div>
                </div>
            </div>
            <ModalRegTest modal={modalShow} SetModal={setModalShow} ></ModalRegTest>
        </>
    )
}
