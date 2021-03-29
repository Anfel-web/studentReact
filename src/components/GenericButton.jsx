import React from "react";
const GenericButton = (props) => {

  const setTitleOnClick = () => {
    if (props.label === "add client") {
      props.setTitle("add client button à été cliquer ")
    } else {
      props.setTitle("remove client button à été cliquer ")
    }
  }

  return (
    <div>
      <button
        onClick={() => setTitleOnClick()}
      >{props.label}</button>
    </div>
  )
}
export default GenericButton;

// nheb composant generic Title =>
// ta3ml deux button wahed ismou saber
// button ismou anfel
// ki teckliqui 3ala saber Composant title <p>saber</p>
// ki teckliqui 3ala anfel Composant title <p>anfel</p>