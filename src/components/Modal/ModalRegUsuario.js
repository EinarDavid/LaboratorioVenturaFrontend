import { React, useEffect } from "react"
import { PasswordInput } from '../Input/PasswordInput';
import { Select } from '../Input/Select'
import { TextInput } from '../Input/TextInput'
import { postAgregarUsuario } from "../../services/usuarioService"

export const RegUsuario = ({ SetModal, modal }) => {
    useEffect(() => {
        postAgregarUsuario({nombre:"erick"}).then(({ data }) => { console.log(data) })
    }, [])
    
    
    const Sex = [{
        option: 'Masculino',
        id_option: 1
    },
    {
        option: 'Femenino',
        id_option: 2
    }];

    const Cargo = [{
        option: 'Administrador',
        id_option: 1
    },
    {
        option: 'Doctor',
        id_option: 2
    }]

    return (modal) ? (
        <>
            <div className='popup_container'>
                <div className='popup_itself'>
                    <form onSubmit={''}>
                        <div className='popup_button_container'>
                            <h1 className='titleStyle'>Registro de usuarios</h1>
                            <button onClick={() => SetModal(false)}>Cancelar</button>
                        </div>
                        <div className='spaceVer30' />
                        <div className='row3-Inputs'>
                            <TextInput
                                LabelInput={'Documento de Identidad*'}
                                Placeholder={'Ej 9456123'}
                                Required={true}
                            />
                            <div className='spaceRow25' />
                            <TextInput
                                LabelInput={'Nombres*'}
                                Placeholder={'Ej. Einar David'}
                                Required={true}
                            />
                            <div className='spaceRow25' />
                            <TextInput
                                LabelInput={'Primer Apellido*'}
                                Placeholder={'Ej Villarroel'}
                                Required={true}
                            />
                        </div>
                        <div className='spaceVer30' />
                        <div className='row3-Inputs'>
                            <TextInput
                                LabelInput={'Segundo Apellido'}
                                Placeholder={'Ej. Vargas'}
                            />
                            <div className='spaceRow25' />
                            <TextInput
                                LabelInput={'Fecha de Nacimiento*'}
                                Placeholder={'Ej. 06/06/2000'}
                                Required={true}
                            />
                            <div className='spaceRow25' />

                            <Select
                                LabelInput={'Género'}
                                Placeholder={'Selecciona el Género'}
                                Required={true}
                                SelectOption={Sex}
                            />
                        </div>

                        <div className='spaceVer30' />
                        <div className='row3-Inputs'>
                            <TextInput
                                LabelInput={'Teléfono*'}
                                Placeholder={'Ej. 63949159'}
                                Required={true}
                            />
                            <div className='spaceRow25' />
                            <TextInput
                                LabelInput={'Dirección'}
                                Placeholder={'Ej. Plaza 10 de Febrero / Villa Pagador'}

                            />
                            <div className='spaceRow25' />

                            <Select
                                LabelInput={'Cargo*'}
                                Placeholder={'Selecciona el Cargo'}
                                Required={true}
                                SelectOption={Cargo}
                            />
                        </div>
                        <div className='spaceVer30' />
                        <div className='row2-Inputs'>
                            <TextInput
                                LabelInput={'Correo electrónico*'}
                                Placeholder={'Ej. einardavidvillarroel@gmail.com'}
                                Required={true}
                            />
                            <div className='spaceRow25' />

                            <PasswordInput
                                LabelInput={'Contraseña'}
                                Placeholder={'Debe contener 8 caracteres mínimo'}
                            />
                        </div>
                        <div className='spaceVer30' />
                        <div className='container-Button-Modal'>
                            <button className='ButtonPrimary'>Registrar</button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    ) : ""


}

