import React from 'react'
import { SelectDinamic } from '../Input/SelectDinamic'

import { TextInputDinamic } from '../Input/TextInputDinamic'

export const SectionFilter = ({ SearchCodigoPac, SearchCI, SearchNombre, SearchEstado }) => {

    const Estado = [{
        option: 'Pendiente',
        id_option: 1
    },
    {
        option: 'Realizado',
        id_option: 2
    },
    {
        option: 'Todos',
        id_option: 3
    },
    ];


    return (
        <>
            <div className='SeccionFilter'>
                <div className="menu-item">

                    <TextInputDinamic Name={'CodigoPaciente'} LabelInput={'Buscar por Código Paciente'} Placeholder={'Escribe el Código'} OnChange={(e) => { SearchCodigoPac(e) }} />

                </div>
                <div className="menu-item">
                    <TextInputDinamic Name={'CI'} LabelInput={'Buscar por CI'} Placeholder={'Escribe el CI'} OnChange={(e) => { SearchCI(e) }} />
                </div>
                <div className="menu-item">
                    <TextInputDinamic Name={'Nombre'} LabelInput={'Buscar por Nombre'} Placeholder={'Escribe el Nombre'} OnChange={(e) => { SearchNombre(e) }} />
                </div>
                <div className="menu-item">
                    <SelectDinamic Name={'Estado'} LabelInput={'Estado'} SelectOption={Estado} Placeholder={'Selecciona'} OnChange={(e) => { SearchEstado(e) }} />
                </div>

            </div>
        </>
    )
}
