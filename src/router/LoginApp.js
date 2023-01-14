import React from 'react'
import { useNavigate } from 'react-router-dom'
import { PasswordInput } from '../components/Input/PasswordInput';
import { useForm } from "react-hook-form";
import { TextInput } from '../components/Input/TextInput';
import { postLogin } from "../services/usuarioService";


export const LoginApp = () => {
    const navigate = useNavigate();

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
                                LabelInput={'Documento de Identidad*'}
                                Placeholder={'Ej 9456123'}
                                Register={register("CI", {
                                    required: 'El campo es requerido',

                                })}
                                ErrorInput={errors.CI?.message}
                            />
                            <div className='spaceVer30' />
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
                            <div className='spaceVer30' />
                            <button className='ButtonPrimary100'  type="submit">iniciar sesión</button>
                        </form>
                    </div>

                </div>
            </div>
        </>
    )
}

