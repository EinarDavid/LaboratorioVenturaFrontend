import React from "react";


export const NavButton = ({Image, onClick}) => {
    return (<>
        <div className="ContainerNav">
            <button onClick={onClick} className='itemNav'>
                <img  src={Image} width={34} alt='icon' ></img>
            </button>
            {/* <h4 className="NameNav">Nombre</h4> */}
        </div>
        {/* <h4 className="NameNav">Nombre</h4> */}
    </>);
};