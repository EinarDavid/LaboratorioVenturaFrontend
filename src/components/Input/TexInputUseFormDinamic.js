import React from "react";

export const TexInputUseFormDinamic = ({
  LabelInput,
  Placeholder,
  ErrorInput,
  Register,
  Name,
  Validation,
  Disabled,
  index,
}) => {
  //console.log(ErrorInput);

  return (
    <>
      <div className="containerTextInput">
        <label className="labelInput">{LabelInput}</label>
        <input
          type="text"
          className="textInput"
          disabled={Disabled}
          placeholder={Placeholder}
          {...Register(`Detalle.${index}.${Name}`, Validation)}
          //name={Name}
        ></input>

        {ErrorInput.Detalle !== undefined ? (
          ErrorInput.Detalle[index] !== undefined ? (
            ErrorInput.Detalle[index][Name] !== undefined ? (
              <>
                <label className="labelInputError">
                  {ErrorInput?.Detalle[index][Name].message}
                </label>
              </>
            ) : (
              <></>
            )
          ) : (
            <></>
          )
        ) : (
          <></>
        )}

      </div>
    </>
  );
};
