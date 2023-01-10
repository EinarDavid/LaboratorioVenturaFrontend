import { React, useEffect, useRef } from "react"
import { PasswordInput } from '../Input/PasswordInput';
import { Select } from '../Input/Select'
import { TextInput } from '../Input/TextInput'
import { getUsuarioTodos, postAgregarUsuario } from "../../services/usuarioService";
import { useForm } from "react-hook-form";
import Images from "../../config/Images";

export const RegUsuario = ({ SetModal, modal }) => {
    useEffect(() => {
        getUsuarioTodos().then(({data})=>console.log(data))
    }, [])

    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'all'
    });

    const onSubmit = data => { postAgregarUsuario(data).then(({ data }) => { 
        console.log(data)
        //limpiar cajas, cerrar modal y avisar que fue añadido con exito
     }) };

    console.log('Error', errors)

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
                    <form
                        autoComplete="off"
                        onSubmit={handleSubmit(onSubmit)} >
                        <div className='popup_button_container'>
                            <h1 className='titleStyle'>Registro de usuarios</h1>
                            <button className="button_close" onClick={() => SetModal(false)}>{
                                <img src={Images.CLOSE} width={30} alt='icon' ></img>
                            } </button>
                        </div>
                        <div className='spaceVer30' />
                        <div className='row3-Inputs'>
                            <TextInput
                                LabelInput={'Documento de Identidad*'}
                                Placeholder={'Ej 9456123'}
                                Register={register("CI", {
                                    required: 'El campo es requerido',

                                })}
                                ErrorInput={errors.CI?.message}
                            />
                            <div className='spaceRow25' />
                            <TextInput
                                LabelInput={'Nombres*'}
                                Placeholder={'Ej. Einar David'}
                                Register={register("Nombres", {
                                    required: 'El campo es requerido',
                                    pattern: {
                                        value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                        message: 'Solo se permiten letras'
                                    }
                                })}
                                ErrorInput={errors.Nombres?.message}
                            />
                            <div className='spaceRow25' />
                            <TextInput
                                LabelInput={'Primer Apellido*'}
                                Placeholder={'Ej Villarroel'}

                                Register={register("PrimerApellido", {
                                    required: 'El campo es requerido',
                                    pattern: {
                                        value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                        message: 'Solo se permiten letras'
                                    }
                                })}
                                ErrorInput={errors.PrimerApellido?.message}
                            />

                        </div>
                        <div className='spaceVer30' />
                        <div className='row3-Inputs'>
                            <TextInput
                                LabelInput={'Segundo Apellido'}
                                Placeholder={'Ej. Vargas'}
                                Register={register("SegundoApellido", {
                                    
                                    pattern: {
                                        value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                        message: 'Solo se permiten letras'
                                    }
                                })}
                                ErrorInput={errors.SegundoApellido?.message}
                            />
                            <div className='spaceRow25' />
                            <TextInput
                                LabelInput={'Fecha de Nacimiento*'}
                                Placeholder={'Ej. 06/06/2000'}
                                Register={register("Fecha_de_Nacimiento", {
                                    required: 'El campo es requerido',
                                    pattern: {
                                        value: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
                                        message: 'El formato debe ser DD/MM/AAAA'
                                    }
                                    
                                })}
                                ErrorInput={errors.Fecha_de_Nacimiento?.message}
                            />
                            <div className='spaceRow25' />

                            <Select
                                LabelInput={'Género*'}
                                Placeholder={'Selecciona el Género'}
                                SelectOption={Sex}

                                Register={register("Genero", {
                                    required: 'El campo es requerido',
                                })}
                                ErrorInput={errors.Genero?.message}

                            />
                            
                        </div>

                        <div className='spaceVer30' />
                        <div className='row3-Inputs'>
                            <TextInput
                                LabelInput={'Teléfono*'}
                                Placeholder={'Ej. 63949159'}
                                Register={register("Telefono", {
                                    required: 'El campo es requerido',
                                    pattern: {
                                        value: /^[0-9]+$/,
                                        message: 'Solo se permiten números'
                                    }
                                })}
                                ErrorInput={errors.Telefono?.message}
                            />
                            <div className='spaceRow25' />
                            <TextInput
                                LabelInput={'Dirección'}
                                Placeholder={'Ej. Plaza 10 de Febrero / Villa Pagador'}
                                Register={register("Direccion", )}
                                ErrorInput={errors.Direccion?.message}

                            />
                            <div className='spaceRow25' />

                            <Select
                                LabelInput={'Cargo*'}
                                Placeholder={'Selecciona el Cargo'}
                                SelectOption={Cargo}
                                Register={register("Cargo", {
                                    required: 'El campo es requerido',
                                })}
                                ErrorInput={errors.Cargo?.message}
                            />
                        </div>
                        <div className='spaceVer30' />
                        <div className='row2-Inputs'>
                            <TextInput
                                LabelInput={'Correo electrónico*'}
                                Placeholder={'Ej. einardavidvillarroel@gmail.com'}
                                Register={register("Email", {
                                    required: 'El campo es requerido',
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: 'Correo electrónico incorrecto'
                                    }
                                })}
                                ErrorInput={errors.Email?.message}
                            />
                            <div className='spaceRow25' />

                            <PasswordInput
                                LabelInput={'Contraseña*'}
                                Placeholder={'Debe contener 8 caracteres mínimo'}
                                Register={register("Password", {
                                    required: 'El campo es requerido',
                                    pattern: {
                                        value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,-_])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                                        message: 'La contraseña debe contener almenos 6 caracteres, entre ellos 1 letra mayuscula, 1 letra minuscula y 1 número.'
                                    }
                                })}
                                ErrorInput={errors.Password?.message}
                            />
                        </div>
                        <div className='spaceVer30' />
                        <div className='container-Button-Modal'>
                            <button className='ButtonPrimary' type="submit">Registrar</button>
                        </div>

                    </form>

                </div>
            </div>
        </>
    ) : ""


}

