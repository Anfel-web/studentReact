import React from "react";
const GenericTitle = (props) => {
    const setTitleOnClick = () => {
        if (props.label === "saber") {
            props.setButton("saber ")
        } else {
            props.setButton("anfel ")
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
export default GenericTitle;