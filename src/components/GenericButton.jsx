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
      <p>button add a été clicker</p>
    </div>
  )
}
export default GenericButton;