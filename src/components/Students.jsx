import React, { useState } from "react";
import StudentsList from '../components/StudentsList';
import TelecomStudentsLevel1 from '../components/TelecomStudentsLevel1';
import StudentsLevel3 from '../components/StudentsLevel3';
import TelecomStudentsSucceed from '../components/TelecomStudentsSucceed';
import StudentSucceed from '../components/StudentSucceed';
import studentsWithStatus from '../functions/studentsWithStatus';

const Students = (props) => {
    console.log("test branch")
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [ville, setVille] = useState("");
    const [moyenne, setMoyenne] = useState(0);
    const [adress, setAdress] = useState("")
    const [specialty, setSpecialty] = useState("");
    const [level, setLevel] = useState(1);
    const [students, setStudents] = useState([]);

    const deleteStudent = (studentElement) => {
        const studentDelete = students.filter(obj => obj.name !== studentElement.name)
        setStudents(studentDelete)
    }
    const studentsWithLevel3 = students.filter((studentltem) => studentltem.level === 3);
    const studentsAdmis = students.filter((studentltem) => studentltem.moyenne >= 10);
    const telecomStudentsLevel1 = students.filter((studentltem) => studentltem.level === 1 && studentltem.specialty === "telecom");
    const telecomStudentsAdmis = students.filter((studentltem) => studentltem.moyenne >= 10 && studentltem.specialty === "telecom");
    const listStudentsWithStatus = studentsWithStatus(students);

    return (
        <div>
         <p>STUDENTS APPLICATION</p>
            name:     <input value={name} onChange={(e) => setName(e.target.value)} />
        age :     <input value={age} onChange={(e) => setAge(Number(e.target.value))} />
        ville :   <input value={ville} onChange={(e) => setVille(e.target.value)} />
        moyenne:  <input value={moyenne} onChange={(e) => setMoyenne(Number(e.target.value))} />
        adress:   <input value={adress} onChange={(e) => setAdress(e.target.value)} />
        specialty:   <select value={specialty} onChange={(e) => setSpecialty(e.target.value)} >
                <option value={"multimedia"}>multimedia</option>
                <option value={"reseau"}>reseau</option>
                <option value={"telecom"}>telecom</option>
            </select>
        level:   <select value={level} onChange={(e) => setLevel(Number(e.target.value))} >
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

            <StudentsList listStudentsWithStatus={listStudentsWithStatus} deleteStudent={deleteStudent} />
            <StudentsLevel3 studentsWithLevel3={studentsWithLevel3} />
            <TelecomStudentsLevel1 telecomStudentsLevel1={telecomStudentsLevel1} />
            <StudentSucceed studentsAdmis={studentsAdmis} />
            <TelecomStudentsSucceed telecomStudentsAdmis={telecomStudentsAdmis} />
        </div >
    )
};
export default Students;