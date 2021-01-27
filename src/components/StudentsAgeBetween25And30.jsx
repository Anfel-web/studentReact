import React, { useState } from "react";



const StudentsAgeBetween25And30 = (props) => {
    

    return (
        <div>
            
                
                {props. studentsAge.length === 0 ? <p>liste vide </p> : props. studentsAge.map((student) => <div style={{ display: 'flex', gap: "12px" }}>
                <p>{student.name}</p>
            </div>
            )}
            
            
        </div>
    )
}

export default StudentsAgeBetween25And30;