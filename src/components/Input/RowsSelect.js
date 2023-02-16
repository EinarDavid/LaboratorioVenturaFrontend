import React, { useState } from 'react'
import Images from '../../config/Images'

export const RowsSelect = ({ LabelInput, Placeholder, SelectOption, ErrorInput, OnChange, Value, Name }) => {

    const [active, setActive] = useState(false);

    const onChangeValue = () => {

        setActive(false)
    }

    return (
        <>
            <div className='containerTextInputRow'>
                <label className='labelInputSelectRow'>{LabelInput}</label>

                <div className='spaceRow10' />

                <div className='dropdowm'>

                    <button
                        className='textInputRow'
                        name={Name}
                        //onChange={OnChange}
                        onClick={() => setActive(!active)}
                    > {Value}
                        <div className='spaceRow10' />
                        {
                            (active) ?
                                <>

                                    <img src={Images.ARROWUP} width={20} alt='IconArrow' />
                                </> :
                                <>
                                    <img src={Images.ARROWDOWN} width={20} alt='IconArrow' />
                                </>
                        }

                    </button>
                    {
                        (active) ? <>
                            <div className='containerPagRow'>
                                {
                                    SelectOption.map(({ option, id_option }) => (
                                        <button
                                            className='buttonTable'
                                            key={id_option}
                                            value={option}
                                            onClick={e => {OnChange(e); setActive(false)}}
                                        >{option}</button>
                                    ))
                                }
                            </div>
                        </> : <></>
                    }

                </div>
            </div>

        </>
    )
}
