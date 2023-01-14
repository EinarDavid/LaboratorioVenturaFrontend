import React from "react";


export const SearchInput = ({ Image, onClick, LabelInput, Placeholder, Data, Key, Find }) => {

    const onChange = (e) => {
        if(e.target.value!="")
        {
            let finded = Data.filter(a =>
                a[Key].substring(0, e.target.value.length).toLowerCase() == (e.target.value).toLowerCase()
            )
            Find(finded)
            console.log('---', finded)
        }
        else
        {
            Find([])
        }
    }
    return (
        <>
            <div className='searchContent'>
                <div className='containerTextInput'>
                    <label className='labelInput'>{LabelInput}</label>
                    <input type='search' className='textInput' placeholder={Placeholder} onChange={onChange}></input>
                </div>
                <div className='spaceRow10' />
                <button onClick={onClick} className='buttonAdd'>
                    <img src={Image} width={26} alt='iconadd'></img>
                </button>

            </div>

        </>);
};