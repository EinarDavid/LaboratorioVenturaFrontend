
//import { getCantProducts } from '../services/productService';
import { useState, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getLaboratorioCant } from '../../services/laboratorioService';

export const PaginationTable = ({ pag, cantidadPagina, click }) => {
    const [cant, setCant] = useState([]);

    useEffect(() => {
        if (pag)
            getLaboratorioCant().then(({ data }) => {
                // console.log(data.cant / cantidadPagina, cantidadPagina, pag)
                setCant(Math.ceil(data.cant / cantidadPagina))})
        else
            pag = 1
    }, [pag]);

    return (
        <>
            <div className='containerPagination'>
                {
                    pag <= 1 ?
                        <>

                            <button className={'btn rounded-0 btn-secondary '} onClick={()=>click(1)}>{"<<"}</button>
                            <div className={'btn rounded-0 btn-primary'}>{1}</div>
                            <button className={'btn rounded-0 btn-secondary '} onClick={()=>click(2)}>{2}</button>
                            <button className={'btn rounded-0 btn-secondary '} onClick={()=>click(3)}>{3}</button>
                            <button className={'btn rounded-0 btn-secondary '} onClick={()=>click(cant)}>{">>"}</button>
                        </>
                        : pag < cant ?
                            <>

                                <button className={'btn rounded-0 btn-secondary '} onClick={()=>click(1)}>{"<<"}</button>
                                <button className={'btn rounded-0 btn-secondary '} onClick={()=>click(parseInt(pag) - 1)}>{pag - 1}</button>
                                <div className={'btn rounded-0 btn-primary'}>{pag}</div>
                                <button className={'btn rounded-0 btn-secondary '} onClick={()=>click(parseInt(pag) + 1)}>{1 * pag + 1}</button>
                                <button className={'btn rounded-0 btn-secondary '} onClick={()=>click(cant)}>{">>"}</button>
                            </>
                            :
                            <>
                                <button className={'btn rounded-0 btn-secondary '} onClick={()=>click(1)}>{"<<"}</button>
                                <button className={'btn rounded-0 btn-secondary '} onClick={()=>click(parseInt(cant) - 2)}>{cant - 2}</button>
                                <button className={'btn rounded-0 btn-secondary '} onClick={()=>click(parseInt(cant) - 1)}>{1 * cant - 1}</button>
                                <div className={'btn rounded-0 btn-primary'}>{cant}</div>
                                <button className={'btn rounded-0 btn-secondary '} onClick={()=>click(cant)}>{">>"}</button>
                            </>
                }
            </div>
        </>
    )
}
