import React, { useState } from "react";
import Images from "../../config/Images";

import { TextInputDinamic } from "../Input/TextInputDinamic";

export const SectionFilterProduct = ({
  SearchCodigoPac,
  SearchCI,
  SearchNombre,
  SearchPrimerApellido,
  SearchSegundoApellido,
}) => {
  const [searchCodigo, setSearchCodigo] = useState(true);
  const [searchCI, setSearchCI] = useState(true);
  const [searchNombre, setSearchNombre] = useState(false);
  const [searchPrimerApellido, setSearchPrimerApellido] = useState(false);
  const [searchSegundoApellido, setSearchSegundoApellido] = useState(false);

  return (
    <>
      <div className="SeccionFilter">
        <hr className="lineFilter" />
        <div className="spaceVer5" />
        <div>
          <div className="titleFilter">
            <h3 className="titleStyleH3">CÓDIGO</h3>
            <button
              className="buttonPrint"
              onClick={() => setSearchCodigo(!searchCodigo)}
            >
              {searchCodigo ? (
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
          {searchCodigo ? (
            <>
              {/* <div className='spaceVer5' /> */}
              <TextInputDinamic
                Name={"CodigoPaciente"}
                //LabelInput={'Buscar por Código Paciente'}
                Placeholder={"Escribe el Código"}
                OnChange={(e) => {
                  SearchCodigoPac(e);
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
                Placeholder={"Escribe el CI"}
                OnChange={(e) => {
                  SearchCI(e);
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
                Placeholder={"Escribe el Nombre"}
                OnChange={(e) => {
                  SearchNombre(e);
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
                Placeholder={"Escribe el Primer Apellido"}
                OnChange={(e) => {
                  SearchPrimerApellido(e);
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
                Placeholder={"Escribe el Segundo Apellido"}
                OnChange={(e) => {
                  SearchSegundoApellido(e);
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
