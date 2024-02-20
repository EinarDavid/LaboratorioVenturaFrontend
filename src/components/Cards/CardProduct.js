import React from "react";

export const CardProduct = ({Number, Name, Description1, Description2}) => {
  return (
    <div className="CardDataProduct">
      <h3 className="TextCard">
        {Number} {Name}
      </h3>
      <div className="DescriptionCardProduct">
        <p className="Desc FontWeight400">{Description1}</p>
        <p className="Desc FontWeight700 Colortext">{Description2}</p>
      </div>
    </div>
  );
};
