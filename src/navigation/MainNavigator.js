
import React from "react";
import { NavLink } from "react-router-dom";
import { NavButton } from "../components/Button/NavButton";
import { NavButtonUnSelect } from "../components/Button/NavButtonUnSelect";
import { OptionUser } from "../components/Modal/OptionUser";

import Images from "../config/Images";



export const MainNavigator = () => {

    return (
        <>
            <div className="containerNavPadre">

                <div className="containerNav">
                    <NavLink
                        to={'/dashboard'}
                    >
                        {({ isActive }) => (
                            isActive ? (<NavButton Image={Images.DASHW} />) : (<NavButtonUnSelect Image={Images.DASHB} />)
                        )
                        }

                    </NavLink>

                    <div className='spaceVer30' />
                    <NavLink
                        to={'/newLab'}
                    >

                        {({ isActive }) => (
                            isActive ? (<NavButton Image={Images.REGLABW} />) : (<NavButtonUnSelect Image={Images.REGLABB} />)
                        )
                        }
                    </NavLink>

                    <div className='spaceVer30' />
                    <NavLink
                        to={'/gestionUser'}
                    >

                        {({ isActive }) => (
                            isActive ? (<NavButton Image={Images.USERW} />) : (<NavButtonUnSelect Image={Images.USERB} />)
                        )
                        }
                    </NavLink>

                    <div className='spaceVer30' />
                    <NavLink
                        to={'/gesionTest'}
                    >

                        {({ isActive }) => (
                            isActive ? (<NavButton Image={Images.NEWEXAMPLEW} />) : (<NavButtonUnSelect Image={Images.NEWEXAMPLEB} />)
                        )
                        }
                    </NavLink>

                    <div className='spaceVer30' />
                    <NavLink
                        to={'/searchLab'}
                    >

                        {({ isActive }) => (
                            isActive ? (<NavButton Image={Images.SEARCHW} />) : (<NavButtonUnSelect Image={Images.SEARCHB} />)
                        )
                        }
                    </NavLink>
                </div>
                <OptionUser/>
            </div>
        </>
    );
};