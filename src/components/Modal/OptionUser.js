import React, { useState } from 'react'
import { RegUsuario } from './ModalRegUsuario';
import { useNavigate } from 'react-router-dom';

import Images from '../../config/Images'

export const OptionUser = () => {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [modalShowRegUser, setModalShowRegUser] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <div>
                <button className='user' onClick={handleOpen}>
                    <img src={Images.USEROPTIONIN} width={80} alt='icon' ></img>
                    <img src={Images.IMGUSER} alt='user' className="imgUser"></img>

                </button>

                {open ? (
                    <ul className="menu">
                        <li className="menu-item">
                            <button>Menu 1</button>
                        </li>
                        <li className="menu-item">
                            <button onClick={() => navigate("/gestionUsuarios")}>Gestion de usuarios</button>
                        </li>
                        <li className="menu-item">
                            <button onClick={() => setModalShowRegUser(true)}>Registrar usuario</button>
                        </li>
                        <li className="menu-item">
                            <button>Cerrar Sesión</button>
                        </li>
                    </ul>
                ) : null}
            </div>
            <RegUsuario modal={modalShowRegUser} SetModal={setModalShowRegUser} ></RegUsuario>
        </>
    )
}
