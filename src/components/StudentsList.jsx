
import React, { useState } from "react";

const StudentsList = (props) => {
    const [selectedStudent, setSelectedStudent] = useState("");
    const [selectedList, setselectedList] = useState("");
    return (
        <div>

            <p> la liste de tous les étudiants : {props.listStudentsWithStatus.length}</p>
            {props.listStudentsWithStatus.length === 0 ? <p>liste vide </p> : props.listStudentsWithStatus.map((student) => <div style={{ display: 'flex', gap: "12px" }}>
                <div onMouseEnter={() =>
                    setselectedList
                    ("les informations des etudiants")}
                    onMouseLeave={() => setselectedList("")}>

                <p>{student.name}</p>
                <p>{student.age}</p>
                <p> {student.ville}</p>{selectedList}</div>
                <p>{student.moyenne}</p>
                <p>{student.adress}</p>
                <p>{student.specialty}</p>
                <p>{student.level}</p>
                <p>{student.status}</p>
                
                <button
                    onClick={() => {
                        { props.deleteStudent(student) }
                    }}
                    onMouseEnter={() => {
                        setSelectedStudent(student.name)
                    }}
                    onMouseLeave={() => setSelectedStudent("")}
                >
                    {selectedStudent === student.name ? "cliquer pour supprimé" : "delete student"}</button>

            </div>
            )
            }

        </div>

    )
}

export default StudentsList;
