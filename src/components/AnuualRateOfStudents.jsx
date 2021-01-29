import React from "react";

const AnnualRateOfStudents = (props) => {
    return (
        <div>

            {props.addTotal.map(moy => <p>{moy}</p>)}

        </div>



    )
}

export default AnnualRateOfStudents;
