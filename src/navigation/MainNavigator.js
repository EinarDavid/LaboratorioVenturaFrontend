
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

                    <NavLink
                        to={'/newLab'}
                    >

                        {({ isActive }) => (
                            isActive ? (<NavButton Image={Images.NEWLABWHITE} />) : (<NavButtonUnSelect Image={Images.NEWLABBLACK} />)
                        )
                        }
                    </NavLink>

                    <NavLink
                        to={'/searchLab'}
                    >

                        {({ isActive }) => (
                            isActive ? (<NavButton Image={Images.EVALUATIONWHITE} />) : (<NavButtonUnSelect Image={Images.EVALUATIONBLACK} />)
                        )
                        }
                    </NavLink>




                    <NavLink
                        to={'/gestionUser'}
                    >

                        {({ isActive }) => (
                            isActive ? (<NavButton Image={Images.USERW} />) : (<NavButtonUnSelect Image={Images.USERB} />)
                        )
                        }
                    </NavLink>

                    <NavLink
                        to={'/gestionTest'}
                    >

                        {({ isActive }) => (
                            isActive ? (<NavButton Image={Images.NEWEXAMPLEW} />) : (<NavButtonUnSelect Image={Images.NEWEXAMPLEB} />)
                        )
                        }
                    </NavLink>
                    <NavLink
                        to={'/gestionProduct'}
                    >

                        {({ isActive }) => (
                            isActive ? (<NavButton Image={Images.PRODUCTWHITE} />) : (<NavButtonUnSelect Image={Images.PRODUCTBLACK} />)
                        )
                        }
                    </NavLink>
                    <NavLink
                        to={'/gestionStock'}
                    >

                        {({ isActive }) => (
                            isActive ? (<NavButton Image={Images.STOCKWHITE} />) : (<NavButtonUnSelect Image={Images.STOCKBLACK} />)
                        )
                        }
                    </NavLink>
                    <NavLink
                        to={'/gestionSale'}
                    >

                        {({ isActive }) => (
                            isActive ? (<NavButton Image={Images.STOCKWHITE} />) : (<NavButtonUnSelect Image={Images.STOCKBLACK} />)
                        )
                        }
                    </NavLink>
                </div>
                <OptionUser />
            </div>
        </>
    );
};