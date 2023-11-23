import React from "react";

export const NavButtonUnSelect = ({ Image, onClick }) => {
  return (
    <>
      <div className="ContainerNav">
        <button onClick={onClick} className="itemNavUnselect">
          <img src={Image} width={34} alt="icon"></img>
        </button>
        {/* <h4 className="NameNav">Nombre</h4> */}
      </div>
    </>
  );
};
