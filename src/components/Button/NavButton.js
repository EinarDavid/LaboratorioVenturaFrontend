import React from "react";


export const NavButton = ({Image, onClick}) => {
    return (<>
        <div >
            <button onClick={onClick} className='itemNav'>
                <img  src={Image} width={34} alt='icon' ></img>
            </button>
        </div>
    </>);
};