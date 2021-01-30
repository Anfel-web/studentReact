import React from "react";

const StudentsList = (props) => {
    return (
        <div>
            <p> la liste de tous les étudiants : {props.listStudentsWithStatus.length}</p>
            {props.listStudentsWithStatus.length === 0 ? <p>liste vide </p> : props.listStudentsWithStatus.map((students) => <div style={{ display: 'flex', gap: "12px" }}>
                <p>{students.name}</p>
                <p>{students.age}</p>
                <p> {students.ville}</p>
                <p>{students.moyenne}</p>
                <p>{students.adress}</p>
                <p>{students.specialty}</p>
                <p>{students.level}</p>
                <p>{students.status}</p>
                <button onClick={() => {
                    { props.deleteStudent(students) }
                }}>delete students</button>
            </div>
            )
            }
           
        </div>

    )
}

export default StudentsList;
