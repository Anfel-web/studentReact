import React, { useState } from "react";
const GenericList = (props) => {
    const [isDisplayStudents, setIsDisplayStudents] = useState(false);
    return (
        <div>
            <button onClick={() => {
                setIsDisplayStudents(!isDisplayStudents)
            }
            }>afficher {props.label}</button>
            {isDisplayStudents && <div>
                <p>{props.label} {props.students.length}</p>
                {props.students.length === 0 ? <p>liste vide </p> : props.students.map((student) => <div style={{ display: 'flex', gap: "12px" }}>
                    <p>{student.name}</p>
                </div>
                )}
            </div>
            }
        </div>
    )
}
export default GenericList;
// yarn add axios ==== npm install axios 