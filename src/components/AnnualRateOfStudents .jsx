import React from "react";



const AnnualRateOfStudents = (props) => {

    return (
        <div>


            {props.addMoy.length === 0 ? <p>liste vide </p> : props.addMoy.map((studentltem) => <div style={{ display: 'flex', gap: "12px" }}>
                <p>{studentltem.name}</p>
            </div>

            )}

        </div>




    )
}
export default AnnualRateOfStudents;