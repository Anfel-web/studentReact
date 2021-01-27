import React from "react";

const MultimédiaRéseauStudents = (props) => {
    return (
        <div>
            {props.studentsMultimédiaOrRéseau.length === 0 ? <p>liste vide</p> : props.studentsMultimédiaOrRéseau.map((student) => <div style={{ display: 'flex', gap: "12px" }}>
                <p>{student.name}</p>
            </div>
            )}
        </div>
    )
}
export default MultimédiaRéseauStudents;