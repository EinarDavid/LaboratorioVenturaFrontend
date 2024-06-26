import React from "react";

export const SearchProduct = ({
  Image,
  onClick,
  LabelInput,
  Placeholder,
  Data,
  Key,
  Find,
}) => {
  const onChange = (e) => {
    if (e.target.value != "") {
      //console.log(e.target.value);
      /*let finded = Data.filter(
        (a) =>
          a[Key].substring(0, e.target.value.length).toLowerCase() ==
          e.target.value.toLowerCase()
      );
      let findedCodigoBarras = Data.filter(
        (a) =>
          a["CodigoBarras"].substring(0, e.target.value.length).toLowerCase() ==
          e.target.value.toLowerCase()
      );
      let findedCodigo = Data.filter(
        (a) =>
          a["Codigo"].substring(0, e.target.value.length).toLowerCase() ==
          e.target.value.toLowerCase()
      );

      let combined = finded.concat(findedCodigoBarras, findedCodigo);

      let uniqueCombined = Array.from(new Set(combined.map((a) => a.id))).map(
        (id) => {
          return combined.find((a) => a.id === id);
        }
      );*/
      const searchTerm = e.target.value.toLowerCase();
      const filteredData = Data.filter((a) => {
        return (
          a[Key].toLowerCase().includes(searchTerm) ||
          a["CodigoBarras"].toLowerCase().includes(searchTerm) ||
          a["Codigo"].toLowerCase().includes(searchTerm)
        );
      });

      // Eliminar duplicados basados en el ID
      const uniqueFilteredData = Array.from(
        new Set(filteredData.map((a) => a._id))
      ).map((id) => {
        return filteredData.find((a) => a._id === id);
      });

      //console.log(uniqueCombined);
      console.log("FiltroRes--", uniqueFilteredData);
      Find(uniqueFilteredData);
    } else {
      Find([]);
    }
  };
  return (
    <>
      <div className="searchContent">
        <div className="containerTextInput">
          <label className="labelInput">{LabelInput}</label>
          <input
            type="input"
            className="textInput"
            placeholder={Placeholder}
            onChange={onChange}
          ></input>
        </div>
        <div className="spaceRow10" />
        <button onClick={onClick} className="buttonAdd">
          <img src={Image} width={26} alt="iconadd"></img>
        </button>
      </div>
    </>
  );
};
