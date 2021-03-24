
import React, { useState } from "react";

const StudentsList = (props) => {
    const [selectedStudent, setSelectedStudent] = useState("");
    const [selectedStudentItem, setSelectedStudentItem] = useState(null);
    return (
        <div>
            <p> la liste de tous les étudiants : {props.listStudentsWithStatus.length}</p>
            <p>étudiant séléctionné: {selectedStudentItem?.name} {selectedStudentItem?.age} {selectedStudentItem?.ville}</p>
            {props.listStudentsWithStatus.length === 0 ? <p>liste vide </p> : props.listStudentsWithStatus.map((student) => <>
                <div style={{ display: 'flex', gap: "12px" }}
                    onMouseEnter={() =>
                        setSelectedStudentItem
                            (student)}
                    onMouseLeave={() => setSelectedStudentItem(null)}>
                    <p>{student.name}</p>
                    <p>{student.age}</p>
                    <p> {student.ville}</p>
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
                </div></>
            )
            }

        </div>

    )
}

export default StudentsList;
