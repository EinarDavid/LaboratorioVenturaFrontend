import React from 'react'
import Images from "../../config/Images";

import { ButtonPrimary100 } from '../Button/ButtonPrimary100';
import { ButtonSecondary100 } from '../Button/ButtonSecondary100';

export const ModalConfirmation = ({ DisableButtonConfirmation, ModalConfirmation, ValueText, OnSubmit, OnCancel }) => {

    return ModalConfirmation ? (
        <>
          <div className="popup_container">
            <div className="popup_itself_Confirmation">
              
              <h1 className="titleStyle2">{ValueText}</h1>
              
              <div className='buttons_footer'>
              <ButtonPrimary100 Nombre={"Aceptar"} OnClick={OnSubmit} Disabled={DisableButtonConfirmation}/>
              <ButtonSecondary100 Nombre={"Cancelar"} OnClick={OnCancel} />
              </div>
              
            </div>
          </div>
        </>
      ) : (
        ""
      );
}
