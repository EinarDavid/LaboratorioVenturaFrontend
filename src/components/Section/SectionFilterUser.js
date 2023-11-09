
import React, { useState } from "react";
import Images from "../../config/Images";

import { TextInputDinamic } from "../Input/TextInputDinamic";

export const SectionFilterUser = ({ handleChangeSearch }) => {
  const [searchCodigo, setSearchCodigo] = useState(true);
  const [searchCI, setSearchCI] = useState(true);
  const [searchNombre, setSearchNombre] = useState(true);
  const [searchPrimerApellido, setSearchPrimerApellido] = useState(true);
  const [searchSegundoApellido, setSearchSegundoApellido] = useState(true);

  return (
    <>
      <div className="SeccionFilter">
        
        <div className="spaceVer5" />
        <hr className="lineFilter" />
        <div className="spaceVer5" />
        <div>
          <div className="titleFilter">
            <h3 className="titleStyleH3">CI</h3>
            <button
              className="buttonPrint"
              onClick={() => setSearchCI(!searchCI)}
            >
              {searchCI ? (
                <>
                  <img src={Images.ARROWDOWN} width={"25"} alt={"ArrowDown"} />
                </>
              ) : (
                <>
                  <img src={Images.ARROWUP} width={"25"} alt={"ArrowUp"} />
                </>
              )}
            </button>
          </div>
          {searchCI ? (
            <>
              {/* <div className='spaceVer5' /> */}
              <TextInputDinamic
                Name={"CI"}
                //LabelInput={'Buscar por CI'}
                Placeholder={"Escribe aquí"}
                OnChange={(e) => {
                  handleChangeSearch(e);
                }}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="spaceVer5" />
        <hr className="lineFilter" />
        <div className="spaceVer5" />
        <div>
          <div className="titleFilter">
            <h3 className="titleStyleH3">NOMBRE</h3>
            <button
              className="buttonPrint"
              onClick={() => setSearchNombre(!searchNombre)}
            >
              {searchNombre ? (
                <>
                  <img src={Images.ARROWDOWN} width={"25"} alt={"ArrowDown"} />
                </>
              ) : (
                <>
                  <img src={Images.ARROWUP} width={"25"} alt={"ArrowUp"} />
                </>
              )}
            </button>
          </div>
          {searchNombre ? (
            <>
              {/* <div className='spaceVer5' /> */}
              <TextInputDinamic
                Name={"Nombre"}
                //LabelInput={'Buscar por Nombre'}
                Placeholder={"Escribe aquí"}
                OnChange={(e) => {
                  handleChangeSearch(e);
                }}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="spaceVer5" />
        <hr className="lineFilter" />
        <div className="spaceVer5" />
        <div>
          <div className="titleFilter">
            <h3 className="titleStyleH3">PRIMER APELLIDO</h3>
            <button
              className="buttonPrint"
              onClick={() => setSearchPrimerApellido(!searchPrimerApellido)}
            >
              {searchPrimerApellido ? (
                <>
                  <img src={Images.ARROWDOWN} width={"25"} alt={"ArrowDown"} />
                </>
              ) : (
                <>
                  <img src={Images.ARROWUP} width={"25"} alt={"ArrowUp"} />
                </>
              )}
            </button>
          </div>
          {searchPrimerApellido ? (
            <>
              <TextInputDinamic
                Name={"PrimerApellido"}
                //LabelInput={'Buscar por Nombre'}
                Placeholder={"Escribe aquí"}
                OnChange={(e) => {
                  handleChangeSearch(e);
                }}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="spaceVer5" />
        <hr className="lineFilter" />

        <div className="spaceVer5" />
        <div>
          <div className="titleFilter">
            <h3 className="titleStyleH3">SEGUNDO APELLIDO</h3>
            <button
              className="buttonPrint"
              onClick={() => setSearchSegundoApellido(!searchSegundoApellido)}
            >
              {searchSegundoApellido ? (
                <>
                  <img src={Images.ARROWDOWN} width={"25"} alt={"ArrowDown"} />
                </>
              ) : (
                <>
                  <img src={Images.ARROWUP} width={"25"} alt={"ArrowUp"} />
                </>
              )}
            </button>
          </div>
          {searchSegundoApellido ? (
            <>
              <TextInputDinamic
                Name={"SegundoApellido"}
                //LabelInput={'Buscar por Nombre'}
                Placeholder={"Escribe aquí"}
                OnChange={(e) => {
                  handleChangeSearch(e);
                }}
              />
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="spaceVer5" />
        <hr className="lineFilter" />
      </div>
    </>
  );
};
