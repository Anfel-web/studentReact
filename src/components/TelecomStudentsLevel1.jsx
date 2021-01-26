import React, { useState } from "react";


const TelecomStudentsLevel1 = (props) => {
    const [isDisplayStudents, setIsDisplayStudents]= useState(false)
    return (
        <div>
            <button onClick={()=> setIsDisplayStudents(!isDisplayStudents)}>afficher la liste des étudiants 1er année telecom</button>
        {   isDisplayStudents && <div>

          <p>la liste des étudiants 1er année telecom: {props.telecomStudentsLevel1.length} </p>
            {props.telecomStudentsLevel1.length ===  0 ? <p>liste vide </p> : props.telecomStudentsLevel1.map((student) => <div style={{ display: 'flex', gap: "12px" }}>
                <p>{student.name}</p>
            </div>
            )

            }
            </div>}
        
        </div>


    )
}

export default TelecomStudentsLevel1;