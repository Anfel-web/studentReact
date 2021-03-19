import React, { useState } from "react";

const StudentsSucceed = (props) => {
    const [isDisplayStudents, setIsDisplayStudents] = useState(false);

    return (
        <div>
            <button onClick={() => {
                setIsDisplayStudents(!isDisplayStudents)
            }
            }>afficher la liste des étudiants admis</button>
            {isDisplayStudents && <div>
                <p>la list des étudiants admis : {props.studentsAdmis.length}</p>
                {props.studentsAdmis.length === 0 ? <p>liste vide </p> : props.studentsAdmis.map((student) => <div style={{ display: 'flex', gap: "12px" }}>
                <p>{student.name}</p>
            </div>
            )}
            </div>
            }
        </div>
    )
}

export default StudentsSucceed;