import React from "react";


export const SearchInput = ({ Image, onClick, LabelInput, Placeholder }) => {
    return (<>
        <div className='searchContent'>
            <div className='containerTextInput'>
                <label className='labelInput'>{LabelInput}</label>
                <input type='search' className='textInput' placeholder={Placeholder}></input>
            </div>
            <div className='spaceRow10' />
            <button onClick={onClick} className='buttonAdd'>
                <img  src={Image} width={26} alt='iconadd'></img>
            </button>
            
        </div>
        
    </>);
};