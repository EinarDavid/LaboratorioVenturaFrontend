import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { ButtonPrimary } from '../components/Button/ButtonPrimary';
import { PasswordInput } from '../components/Input/PasswordInput';
import { Select } from '../components/Input/Select';
import { TextInput } from '../components/Input/TextInput';
import Images from '../config/Images';
import { getPacienteUno, postPacienteModificar } from '../services/pacienteService';

export const ViewPac = () => {
    const navigate = useNavigate();
    const [disableButton, setDisableButton] = useState(false);
    const [paciente, setPaciente] = useState({});

    const { register, formState, formState: { errors, isSubmitSuccessful }, reset, handleSubmit } = useForm({
        mode: 'all'
    });

    let { idPaciente } = useParams();

    const llamarPaciente = () => getPacienteUno(idPaciente).then(({ data }) => setPaciente(data))

    useEffect(() => {
        console.log("llamando", idPaciente)
        llamarPaciente()
    }, [])
    useEffect(() => console.log(paciente), [paciente])

    const onSubmit = (data) => {
        console.log(data)
        setDisableButton(true)
        postPacienteModificar(idPaciente, data).then(({ data }) => {
            console.log(data)
            alert(data.mensaje);
            navigate('/gestionUser');
            setDisableButton(false)

            //Mostrar mensaje y regresar a la lista de pacientes
        })
    }

    const _handleDelete = () => {

    }
    const Sex = [{
        option: 'Masculino',
        id_option: 1
    },
    {
        option: 'Femenino',
        id_option: 2
    }];

    return (
        <>
            <div className="App">
                <div className='mainNav'>

                </div>
                <div className='containerPadre'>
                    <div className='containerHijo'>
                        <div className='navTitleContainer'>

                            <button className="button_close"
                                onClick={() => navigate('/gestionUser')}>
                                {
                                    <img src={Images.ARROWLEFT} width={30} alt='icon' ></img>
                                }
                            </button>
                            <div className='spaceRow10' />
                            <h1 className='titleStyle'>Información del paciente</h1>
                        </div>
                        <div className='spaceVer15' />
                        <div className='containerButtonRight'>
                            <button className='stateStyle'
                                style={{ background: '#FFCECE' }}
                                onClick={() => _handleDelete}
                            >
                                <p className='stateParrafo'>Eliminar</p>
                            </button>
                        </div>

                        <div className='spaceVer15' />
                        {paciente.CI ?
                            <form
                                autoComplete="off"
                                onSubmit={handleSubmit(onSubmit)} >

                                <div className='row3-Inputs'>
                                    <TextInput
                                        LabelInput={'Documento de Identidad*'}
                                        Placeholder={'Ej 9456123'}
                                        Register={register("CI", {
                                            required: 'El campo es requerido',
                                            value: paciente.CI
                                        })}
                                        ErrorInput={errors.CI?.message}
                                    />
                                    <div className='spaceRow25' />
                                    <TextInput
                                        LabelInput={'Nombres*'}
                                        Placeholder={'Ej. Einar David'}
                                        Register={register("Nombres", {
                                            required: 'El campo es requerido',
                                            value: paciente.Nombres,
                                            pattern: {
                                                value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                                message: 'Solo se permiten letras',
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
                                            value: paciente.PrimerApellido,
                                            pattern: {
                                                value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                                message: 'Solo se permiten letras'
                                            }
                                        })}
                                        ErrorInput={errors.PrimerApellido?.message}
                                    />

                                </div>
                                <div className='spaceVer20' />
                                <div className='row3-Inputs'>
                                    <TextInput
                                        LabelInput={'Segundo Apellido'}
                                        Placeholder={'Ej. Vargas'}
                                        Register={register("SegundoApellido", {
                                            value: paciente.SegundoApellido,
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
                                            value: paciente.Fecha_de_Nacimiento,
                                            pattern: {
                                                value: /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
                                                message: 'El formato debe ser DD/MM/AAAA'
                                            }

                                        })}
                                        ErrorInput={errors.Fecha_de_Nacimiento?.message}
                                    />
                                    <div className='spaceRow25' />
                                    <TextInput
                                        LabelInput={'Código'}
                                        Placeholder={'Ej. 0001'}
                                        Register={register("CodigoPaciente", {
                                            value: paciente.CodigoPaciente,
                                            pattern: {

                                            }
                                        })}
                                        ErrorInput={errors.CodigoPaciente?.message}
                                    />


                                </div>

                                <div className='spaceVer20' />
                                <div className='row3-Inputs'>
                                    <Select
                                        LabelInput={'Género*'}
                                        Placeholder={'Selecciona el Género'}
                                        SelectOption={Sex}

                                        Register={register("Genero", {
                                            value: paciente.Genero,
                                            //required: 'El campo es requerido',
                                        })}
                                        ErrorInput={errors.Genero?.message}

                                    />
                                    <div className='spaceRow25' />
                                    <TextInput
                                        LabelInput={'Teléfono*'}
                                        Placeholder={'Ej. 63949159'}
                                        Register={register("Telefono", {
                                            //required: 'El campo es requerido',
                                            value: paciente.Telefono,
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
                                        Register={register("Direccion", {
                                            value: paciente.Direccion,
                                        })}
                                        ErrorInput={errors.Direccion?.message}

                                    />



                                </div>
                                <div className='spaceVer20' />
                                <div className='row3-Inputs'>
                                    <TextInput
                                        LabelInput={'Razon Social'}
                                        Placeholder={'Ej. Villarroel'}
                                        Register={register("RazonSocial", {
                                            value: paciente.RazonSocial,
                                            pattern: {
                                                value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                                message: 'Solo se permiten letras'
                                            }
                                        })}
                                        ErrorInput={errors.RazonSocial?.message}
                                    />
                                    <div className='spaceRow25' />
                                    <TextInput
                                        LabelInput={'NIT'}
                                        Placeholder={'Ej. 9367493'}
                                        Register={register("NIT", {
                                            //required: 'El campo es requerido',
                                            value: paciente.NIT,
                                            pattern: {
                                                value: /^[0-9]+$/,
                                                message: 'Solo se permiten números'
                                            }
                                        })}
                                        ErrorInput={errors.NIT?.message}
                                    />
                                    <div className='spaceRow25' />

                                    <TextInput
                                        LabelInput={'Correo electrónico*'}
                                        Placeholder={'Ej. einardavidvillarroel@gmail.com'}
                                        Register={register("Email", {
                                            //required: 'El campo es requerido',
                                            value: paciente.Email,
                                            pattern: {
                                                value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                                message: 'Correo electrónico incorrecto'
                                            }
                                        })}
                                        ErrorInput={errors.Email?.message}
                                    />

                                </div>
                                <div className='spaceVer20' />
                                <div>

                                    <PasswordInput
                                        LabelInput={'Contraseña*'}
                                        Placeholder={'Debe contener 8 caracteres mínimo'}
                                        Register={register("Password", {
                                            value: paciente.Password,
                                            //required: 'El campo es requerido',
                                            pattern: {
                                                value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,-_])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                                                message: 'La contraseña debe contener almenos 6 caracteres, entre ellos 1 letra mayuscula, 1 letra minuscula y 1 número.'
                                            }
                                        })}
                                        ErrorInput={errors.Password?.message}
                                    />
                                </div>
                                <div className='spaceVer20' />

                                <ButtonPrimary Nombre={'GUARDAR'} Disabled={disableButton} />



                            </form>
                            : <></>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
