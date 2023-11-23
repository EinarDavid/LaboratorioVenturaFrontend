import React from "react";

export const SelectUseFormDinamic = ({
  LabelInput,
  Placeholder,
  SelectOption,
  ErrorInput,
  Register,
  Name,
  Validation,
  index,
}) => {
  return (
    <>
      <div className="containerTextInput">
        <label className="labelInput">{LabelInput}</label>

        <select
          className="textInput"
          //name={Name}
          {...Register(`Detalle.${index}.${Name}`, Validation)}
        >
          <option value="" hidden>
            
            {Placeholder}
          </option>
          {SelectOption.map(({ option, id }) => (
            <option key={id} value={option}>
              {option}
            </option>
          ))}
        </select>

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
