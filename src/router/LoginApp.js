import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PasswordInput } from '../components/Input/PasswordInput';
import { useForm } from "react-hook-form";
import { TextInput } from '../components/Input/TextInput';
import { postLogin } from "../services/usuarioService";


export const LoginApp = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({});

    const onLogin = () => {
        navigate('/*');
    }
    const { register, formState: { errors }, handleSubmit } = useForm({
        mode: 'all'
    });
    const onSubmit = data => {
        /*postLogin(data).then(({ data }) => {
            console.log(data)
            //limpiar cajas, cerrar modal y avisar que fue añadido con exito
        })*/
        navigate('/*', {
            replace: true
        });
    };

    const handleChangeForm = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }


    return (
        <>
            <div className='fondoLogin'>
                <div className='loginContainer'>
                    <div className='containerForm'>
                        <h1 className='titleStyle'>Bienvenido</h1>
                        <div className='spaceVer20' />
                        <p className='parrafoStyle'>Por favor ingrese sus datos para iniciar sesión a continuación</p>
                        <div className='spaceVer20' />
                        <form
                            autoComplete="off"
                            onSubmit={handleSubmit(onSubmit)}>


                            <TextInput
                                Name={'CI'}
                                LabelInput={'Documento de Identidad*'}
                                Placeholder={'Ej 9456123'}
                                Register={register("CI", {
                                    required: 'El campo es requerido',

                                })}
                                ErrorInput={errors.CI?.message}
                                OnChange={(e) => handleChangeForm(e)}
                                Value={form.CI || ''}

                            />
                            <div className='spaceVer30' />
                            <PasswordInput
                                Name={'Password'}
                                LabelInput={'Contraseña*'}
                                Placeholder={'Escribe tu contraseña'}
                                Register={register("Password", {
                                    required: 'El campo es requerido',
                                    
                                })}
                                ErrorInput={errors.Password?.message}
                                Onchange={(e) => handleChangeForm(e)}
                                Value={form.Password || ""}

                            />
                            <div className='spaceVer30' />
                            <button className='ButtonPrimary100' type="submit">iniciar sesión</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

