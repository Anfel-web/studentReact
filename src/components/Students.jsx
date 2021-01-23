import React, { useState } from "react";
import StudentsList from "../components/StudentsList";
import LevelSpecialty from "../components/LevelSpecialty";
import StudentsLevel3 from "../components/StudentsLevel3";
import StudentsMoyenneSupérieurA10 from "../components/StudentsMoyenneSupérieurA10";
import StudentSucceed from "../components/StudentSucceed";
const Students = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState();
    const [ville, setVille] = useState();
    const [moyenne, setMoyenne] = useState();
    const [adress, setAdress] = useState("")
    const [specialty, setSpecialty] = useState("");
    const [level, setLevel] = useState(1);
    const [students, setStudents] = useState([]);
    const deleteStudent = (studentElement) => {
        const studentDelete = students.filter(obj => obj.name !== studentElement.name)
        setStudents(studentDelete)
    }
    console.log("students", students)
    const levlequals3 = students.filter((studentltem) => studentltem.level == 3);
    console.log("levlequals3", levlequals3)
    const moySupA10 = students.filter((listMoyenne) => listMoyenne.moyenne >= 10);
    const level3SpecT = students.filter((levelSpeci) => levelSpeci.level == 1 && levelSpeci.specialty == "telecom");
    const studentsMoySupA10 = students.filter((studentsSucceedMoy10) => Number(studentsSucceedMoy10.moyenne ) >= 10 && studentsSucceedMoy10.specialty == "telecom");
    return (
        <div>

            name:     <input value={name} onChange={(e) => setName(e.target.value)} />
        age :     <input value={age} onChange={(e) => setAge(e.target.value)} />
        ville :   <input value={ville} onChange={(e) => setVille(e.target.value)} />
        moyenne:  <input value={moyenne} onChange={(e) => setMoyenne(e.target.value)} />
        adress:   <input value={adress} onChange={(e) => setAdress(e.target.value)} />
        specialty:   <select value={specialty} onChange={(e) => setSpecialty(e.target.value)} >

                <option value={"multimedia"}>multimedia</option>
                <option value={"reseau"}>reseau</option>
                <option value={"telecom"}>telecom</option>
            </select>
        level:   <select value={level} onChange={(e) => setLevel(e.target.value)} >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </select>

            <div>
                <button onClick={() => {
                    const newPerson = { name, age, ville, moyenne, adress, specialty, level };
                    setStudents([...students, newPerson])
                }}>add student</button>
            </div>

            <StudentsList students={students} deleteStudent={deleteStudent} />
            <StudentsLevel3 levlequals3={levlequals3} />
            <StudentsMoyenneSupérieurA10 moySupA10={moySupA10} />
            <LevelSpecialty level3SpecT={level3SpecT} />
            <StudentSucceed studentsMoySupA10={studentsMoySupA10} />

        </div >
    )
};
export default Students;