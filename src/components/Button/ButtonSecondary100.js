import React from "react";

export const ButtonSecondary100 = ({ Disabled, Nombre, OnClick }) => {
  return (
    <>
      <div className="container-Button-Modal">
        {Disabled ? (
          <button
            className="ButtonPrimaryDisabled100"
            type="submit"
            disabled={Disabled}
          >
            {Nombre}
          </button>
        ) : (
          <button
            className="ButtonSecondary100"
            type="submit"
            disabled={Disabled}
            onClick={OnClick}
          >
            {Nombre}
          </button>
        )}
      </div>
    </>
  );
};
