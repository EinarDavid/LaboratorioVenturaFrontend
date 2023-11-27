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
  console.log("-------------", SelectOption)
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
          {SelectOption !== undefined ? (
            <>
              {SelectOption?.map(({ _id, Nombre }) => (
                <option key={_id} value={_id}>
                  {Nombre}
                </option>
              ))}
            </>
          ) : (
            <></>
          )}
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
