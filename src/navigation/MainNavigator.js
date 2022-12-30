import React from "react";
import { NavLink } from "react-router-dom";
import { NavButton } from "../components/Button/NavButton";
import { NavButtonUnSelect } from "../components/Button/NavButtonUnSelect";
import Images from "../config/Images";


export const MainNavigator = () => {
    return (
        <>
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
                    isActive ? (<NavButton Image={Images.REGLABW} />) : (<NavButtonUnSelect Image={Images.REGLABB} />)
                )
                }
            </NavLink>

            <div className='spaceVer30' />
            <NavLink
                to={'/gesionExample'}
            >

                {({ isActive }) => (
                    isActive ? (<NavButton Image={Images.REGLABW} />) : (<NavButtonUnSelect Image={Images.REGLABB} />)
                )
                }
            </NavLink>

            <div className='spaceVer30' />
            <NavLink
                to={'/searchLab'}
            >

                {({ isActive }) => (
                    isActive ? (<NavButton Image={Images.REGLABW} />) : (<NavButtonUnSelect Image={Images.REGLABB} />)
                )
                }
            </NavLink>

        </>
    );
};