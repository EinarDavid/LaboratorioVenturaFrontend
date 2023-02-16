import React, { useState, useEffect } from 'react'
import { ButtonPrimary } from '../Button/ButtonPrimary';
import { PasswordInput } from '../Input/PasswordInput';
import { Select } from '../Input/Select'
import { TextInput } from '../Input/TextInput'
import { TextInputDinamic } from '../Input/TextInputDinamic';

export const RegistroPaciente = ({
    paciente = {
        CodigoPaciente: '',
        CI: '',
        Nombres: '',
        PrimerApellido: '',
        SegundoApellido: '',
        Fecha_de_Nacimiento: '',
        Genero: '',
        Telefono: '',
        Direccion: '',
        RazonSocial: '',
        NIT: '',
        Email: '',
        Password: ''
    },
    handleSubmit,
    onSubmit,
    register,
    errors,
    disableButton,
    handleChangeForm

}) => {

    useEffect(() => {
        console.log("PAcienteeee:", paciente);

    }, [paciente]);

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
            {
                paciente.CI ?
                    <>
                        {/* <form

                            autoComplete="off"
                            onSubmit={handleSubmit(onSubmit)} > */}

                            <div className='row3-Inputs'>
                                <TextInput
                                    Name={"CI"}
                                    LabelInput={'Documento de Identidad*'}
                                    Placeholder={'Ej 9456123'}
                                    Register={register("CI", {
                                        required: 'El campo es requerido',
                                    })}
                                    ErrorInput={errors.CI?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.CI}

                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'Nombres'}
                                    LabelInput={'Nombres*'}
                                    Placeholder={'Ej. Einar David'}
                                    Register={register("Nombres", {
                                        required: 'El campo es requerido',

                                        pattern: {
                                            value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                            message: 'Solo se permiten letras',
                                        }
                                    })}
                                    ErrorInput={errors.Nombres?.message}

                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.Nombres}

                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'PrimerApellido'}
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
                                    OnChange={(e) => handleChangeForm(e)}

                                    Value={paciente.PrimerApellido}
                                />

                            </div>
                            <div className='spaceVer20' />
                            <div className='row3-Inputs'>
                                <TextInput
                                    Name={'SegundoApellido'}
                                    LabelInput={'Segundo Apellido'}
                                    Placeholder={'Ej. Vargas'}
                                    Register={register("SegundoApellido", {
                                        pattern: {
                                            value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                            message: 'Solo se permiten letras'
                                        }
                                    })}
                                    ErrorInput={errors.SegundoApellido?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.SegundoApellido}
                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'Fecha_de_Nacimiento'}
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
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.Fecha_de_Nacimiento}
                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'CodigoPaciente'}
                                    LabelInput={'Código'}
                                    Placeholder={'Ej. 0001'}
                                    Register={register("CodigoPaciente", {

                                        pattern: {

                                        }
                                    })}
                                    ErrorInput={errors.CodigoPaciente?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.CodigoPaciente}
                                />

                            </div>

                            <div className='spaceVer20' />
                            <div className='row3-Inputs'>
                                <Select
                                    Name={'Genero'}
                                    LabelInput={'Género*'}
                                    Placeholder={'Selecciona el Género'}
                                    SelectOption={Sex}

                                    Register={register("Genero", {

                                        //required: 'El campo es requerido',
                                    })}
                                    ErrorInput={errors.Genero?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.Genero}
                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'Telefono'}
                                    LabelInput={'Teléfono*'}
                                    Placeholder={'Ej. 63949159'}
                                    Register={register("Telefono", {
                                        //required: 'El campo es requerido',

                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Solo se permiten números'
                                        }
                                    })}
                                    ErrorInput={errors.Telefono?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.Telefono || ""}
                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'Direccion'}
                                    LabelInput={'Dirección'}
                                    Placeholder={'Ej. Plaza 10 de Febrero / Villa Pagador'}
                                    Register={register("Direccion", {

                                    })}
                                    ErrorInput={errors.Direccion?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.Direccion}
                                />
                            </div>
                            <div className='spaceVer20' />
                            <div className='row3-Inputs'>
                                <TextInput
                                    Name={'RazonSocial'}
                                    LabelInput={'Razon Social'}
                                    Placeholder={'Ej. Villarroel'}
                                    Register={register("RazonSocial", {

                                        pattern: {
                                            value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                            message: 'Solo se permiten letras'
                                        }
                                    })}
                                    ErrorInput={errors.RazonSocial?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.RazonSocial}
                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'NIT'}
                                    LabelInput={'NIT'}
                                    Placeholder={'Ej. 9367493'}
                                    Register={register("NIT", {
                                        //required: 'El campo es requerido',

                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Solo se permiten números'
                                        }
                                    })}
                                    ErrorInput={errors.NIT?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.NIT}
                                />
                                <div className='spaceRow25' />

                                <TextInput
                                    Name={'Email'}
                                    LabelInput={'Correo electrónico*'}
                                    Placeholder={'Ej. einardavidvillarroel@gmail.com'}
                                    Register={register("Email", {
                                        //required: 'El campo es requerido',

                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Correo electrónico incorrecto'
                                        }
                                    })}
                                    ErrorInput={errors.Email?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.Email}
                                />

                            </div>
                            <div className='spaceVer20' />
                            <div>

                                <PasswordInput
                                    Name={'Password'}
                                    LabelInput={'Contraseña*'}
                                    Placeholder={'Debe contener 8 caracteres mínimo'}
                                    Register={register("Password", {

                                        //required: 'El campo es requerido',
                                        pattern: {
                                            value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,-_])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                                            message: 'La contraseña debe contener almenos 6 caracteres, entre ellos 1 letra mayuscula, 1 letra minuscula y 1 número.'
                                        }
                                    })}
                                    ErrorInput={errors.Password?.message}

                                    Onchange={(e) => handleChangeForm(e)}
                                    Value={paciente.Password}

                                />
                            </div>
                            <div className='spaceVer20' />
                            <ButtonPrimary Nombre={'GUARDAR'} Disabled={disableButton} OnClick={onSubmit} />
                        {/* </form> */}
                    </>
                    : <>
                        {/* <form

                            autoComplete="off"
                            onSubmit={handleSubmit(onSubmit)} > */}
                            <div className='row3-Inputs'>
                                <TextInput
                                    Name={"CI"}
                                    LabelInput={'Documento de Identidad*'}
                                    Placeholder={'Ej 9456123'}
                                    Register={register("CI", {
                                        required: 'El campo es requerido',
                                    })}
                                    ErrorInput={errors.CI?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.CI}

                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'Nombres'}
                                    LabelInput={'Nombres*'}
                                    Placeholder={'Ej. Einar David'}
                                    Register={register("Nombres", {
                                        required: 'El campo es requerido',

                                        pattern: {
                                            value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                            message: 'Solo se permiten letras',
                                        }
                                    })}
                                    ErrorInput={errors.Nombres?.message}

                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.Nombres}

                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'PrimerApellido'}
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
                                    OnChange={(e) => handleChangeForm(e)}

                                    Value={paciente.PrimerApellido}
                                />

                            </div>
                            <div className='spaceVer20' />
                            <div className='row3-Inputs'>
                                <TextInput
                                    Name={'SegundoApellido'}
                                    LabelInput={'Segundo Apellido'}
                                    Placeholder={'Ej. Vargas'}
                                    Register={register("SegundoApellido", {
                                        pattern: {
                                            value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                            message: 'Solo se permiten letras'
                                        }
                                    })}
                                    ErrorInput={errors.SegundoApellido?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.SegundoApellido}
                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'Fecha_de_Nacimiento'}
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
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.Fecha_de_Nacimiento}
                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'CodigoPaciente'}
                                    LabelInput={'Código'}
                                    Placeholder={'Ej. 0001'}
                                    Register={register("CodigoPaciente", {

                                        pattern: {

                                        }
                                    })}
                                    ErrorInput={errors.CodigoPaciente?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.CodigoPaciente}
                                />

                            </div>

                            <div className='spaceVer20' />
                            <div className='row3-Inputs'>
                                <Select
                                    Name={'Genero'}
                                    LabelInput={'Género*'}
                                    Placeholder={'Selecciona el Género'}
                                    SelectOption={Sex}

                                    Register={register("Genero", {

                                        //required: 'El campo es requerido',
                                    })}
                                    ErrorInput={errors.Genero?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.Genero}
                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'Telefono'}
                                    LabelInput={'Teléfono*'}
                                    Placeholder={'Ej. 63949159'}
                                    Register={register("Telefono", {
                                        //required: 'El campo es requerido',

                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Solo se permiten números'
                                        }
                                    })}
                                    ErrorInput={errors.Telefono?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.Telefono || ""}
                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'Direccion'}
                                    LabelInput={'Dirección'}
                                    Placeholder={'Ej. Plaza 10 de Febrero / Villa Pagador'}
                                    Register={register("Direccion", {

                                    })}
                                    ErrorInput={errors.Direccion?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.Direccion}
                                />
                            </div>
                            <div className='spaceVer20' />
                            <div className='row3-Inputs'>
                                <TextInput
                                    Name={'RazonSocial'}
                                    LabelInput={'Razon Social'}
                                    Placeholder={'Ej. Villarroel'}
                                    Register={register("RazonSocial", {

                                        pattern: {
                                            value: /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/,
                                            message: 'Solo se permiten letras'
                                        }
                                    })}
                                    ErrorInput={errors.RazonSocial?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.RazonSocial}
                                />
                                <div className='spaceRow25' />
                                <TextInput
                                    Name={'NIT'}
                                    LabelInput={'NIT'}
                                    Placeholder={'Ej. 9367493'}
                                    Register={register("NIT", {
                                        //required: 'El campo es requerido',

                                        pattern: {
                                            value: /^[0-9]+$/,
                                            message: 'Solo se permiten números'
                                        }
                                    })}
                                    ErrorInput={errors.NIT?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.NIT}
                                />
                                <div className='spaceRow25' />

                                <TextInput
                                    Name={'Email'}
                                    LabelInput={'Correo electrónico*'}
                                    Placeholder={'Ej. einardavidvillarroel@gmail.com'}
                                    Register={register("Email", {
                                        //required: 'El campo es requerido',

                                        pattern: {
                                            value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                            message: 'Correo electrónico incorrecto'
                                        }
                                    })}
                                    ErrorInput={errors.Email?.message}
                                    OnChange={(e) => handleChangeForm(e)}
                                    Value={paciente.Email}
                                />

                            </div>
                            <div className='spaceVer20' />
                            <div>

                                <PasswordInput
                                    Name={'Password'}
                                    LabelInput={'Contraseña*'}
                                    Placeholder={'Debe contener 8 caracteres mínimo'}
                                    Register={register("Password", {

                                        //required: 'El campo es requerido',
                                        pattern: {
                                            value: /^(?=.*[0-9])(?=.*[!@#$%^&*.,-_])[a-zA-Z0-9!@#$%^&*.,]{6,16}$/,
                                            message: 'La contraseña debe contener almenos 6 caracteres, entre ellos 1 letra mayuscula, 1 letra minuscula y 1 número.'
                                        }
                                    })}
                                    ErrorInput={errors.Password?.message}

                                    Onchange={(e) => handleChangeForm(e)}
                                    Value={paciente.Password}

                                />
                            </div>
                            <div className='spaceVer20' />

                            <ButtonPrimary Nombre={'GUARDAR'} Disabled={disableButton} OnClick={onSubmit} />
                        {/* </form> */}

                    </>
            }

        </>
    )
}
