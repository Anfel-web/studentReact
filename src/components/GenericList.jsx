import React, { useState } from "react";

<<<<<<< HEAD:src/components/GenericList.jsx


const GenericList = (props) => {
=======
const StudentsSucceed = (props) => {
>>>>>>> 820732a... students:src/components/StudentSucceed.jsx
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