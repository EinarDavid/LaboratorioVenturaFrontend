import React from "react";
import { NavButton } from "../components/Button/NavButton";
import Images from "../config/Images";


export const MainNavigator = () => {
    return (<>
        <NavButton Image={Images.DASH}/>

        <div className='spaceVer30'/>
        <NavButton Image={Images.DASH} />

        <div className='spaceVer30'/>
        <NavButton Image={Images.DASH}/>

        <div className='spaceVer30'/>
        <NavButton Image={Images.DASH}/>
        
        <div className='spaceVer30'/>
        <NavButton Image={Images.DASH}/>

    </>);
};