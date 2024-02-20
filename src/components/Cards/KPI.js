import React from "react";

export const KPI = ({ Number, Unidad, Icon, Description, Width }) => {
  return (
    <div className="KPI">
      <div className="KPI_Icon">
        <img src={Icon} width={Width} alt="icon"></img>
      </div>
      <div className="KPI_Description">
        <div className="ContainerDataKPI">
          <h1 className="KPI_Number">{Number} </h1>
          <h2 className="KPI_Unidad">{Unidad}</h2>
        </div>

        <p className="KPI_Description">{Description}</p>
      </div>
    </div>
  );
};
