import React, { useState } from 'react'
import { RegUsuario } from './ModalRegUsuario';
import { useNavigate } from 'react-router-dom';

import { Logout } from '../../services/login';

import Images from '../../config/Images'

export const OptionUser = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [modalShowRegUser, setModalShowRegUser] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    }

    const LogoutSesion = () => {
        localStorage.removeItem('token');
        console.log("Sesion cerrada")
        navigate("/")

        /*Logout().then(()=>{
            
        })*/
    }

    return (
        <>
            <div>
                <button className='user' onClick={handleOpen}>
                    <img src={Images.USEROPTIONIN} width={80} alt='icon' ></img>
                    {/* <img src={Images.IMGUSER} alt='user' className="imgUser"></img> */}

                </button>

                {open ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <button onClick={() => navigate("/gestionUsuarios")}>Gestión de usuarios</button>
                        </li>
                        <li className="menu-item">
                            <button onClick={() => navigate("/gestionProveedor")}>Gestión de proveedores</button>
                        </li>
                        <li className="menu-item">
                            <button onClick={() => navigate("/gestionGrupo")}>Gestión de grupos</button>
                        </li>
                        <li className="menu-item">
                            <button onClick={() => navigate("/gestionSubgrupo")}>Gestión de subgrupos</button>
                        </li>
                        <li className="menu-item">
                            <button onClick={() => navigate("/gestionSucursales")}>Gestión de sucursales</button>
                        </li>
                        <li className="menu-item">
                            <button onClick={LogoutSesion} >Cerrar Sesión</button>
                        </li>
                    </ul>
                ) : null}
            </div>
            <RegUsuario modal={modalShowRegUser} SetModal={setModalShowRegUser} ></RegUsuario>
        </>
    )
}
