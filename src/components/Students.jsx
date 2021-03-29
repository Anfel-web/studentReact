import React, { useState } from "react";
import StudentsList from '../components/StudentsList';
import studentsWithStatus from '../functions/studentsWithStatus';
import StudentsTimeTable from "../components/StudentsTimeTable";
import GenericList from "./GenericList";
import GenericButton from "./GenericButton";

const Students = () => {
    const [buttonAddTitle, setButtonAddTitle] = useState("add student");
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [ville, setVille] = useState("");
    const [moyenne, setMoyenne] = useState(0);
    const [adress, setAdress] = useState("")
    const [specialty, setSpecialty] = useState("");
    const [level, setLevel] = useState(1);
    const [students, setStudents] = useState([]);
    const [title, setTitle] = useState('')
    const deleteStudent = (studentElement) => {
        const studentDelete = students.filter(obj => obj.name !== studentElement.name)
        setStudents(studentDelete)
    }
    const studentsWithLevel3 = students.filter((studentltem) => studentltem.level === 3);
    const studentsAdmis = students.filter((studentltem) => studentltem.moyenne >= 10);
    const telecomStudentsLevel1 = students.filter((studentltem) => studentltem.level === 1 && studentltem.specialty === "telecom");
    const telecomStudentsAdmis = students.filter((studentltem) => studentltem.moyenne >= 10 && studentltem.specialty === "telecom");
    const studentsAgeBetween25And30 = students.filter((studentltem) => studentltem.age > 25 && studentltem.age < 30);
    const listStudentsWithStatus = studentsWithStatus(students);
    const studentsMultimédiaOrRéseau = students.filter((studentltem) => studentltem.specialty === "multimedia" || studentltem.specialty === "reseau")
    const sommeMoy = students.reduce((moy, studentItem) => moy + studentItem.moyenne, 0);
    const moy = sommeMoy / students.length
    console.log("moy", moy);

    return (
        <div>
            <p>STUDENTS APPLICATION</p>
            <p>formulaire</p>
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
                }}
                    onMouseEnter={() => setButtonAddTitle
                        ("cliquer pour ajouter")}
                    onMouseLeave={() => setButtonAddTitle("add student")}
                >{buttonAddTitle}</button>
            </div>
            {title}
            <StudentsList listStudentsWithStatus={listStudentsWithStatus} deleteStudent={deleteStudent} />
            <GenericList students={telecomStudentsLevel1} label="la liste des étudiants 1er année telecom:" />
            <GenericList students={studentsAdmis} label="la list des étudiants admis" />
            <GenericList students={studentsWithLevel3} label="la liste des étudiant de 3émme année" />
            <GenericList students={telecomStudentsAdmis} label="la liste des étudiants telecom admis" />
            <GenericList students={studentsAgeBetween25And30} label="studentsAgeBetween25And30" />
            <GenericList students={studentsMultimédiaOrRéseau} label="studentsMultimédiaOrRéseau" />
            <p>Moyenne  : {moy}</p>
            <StudentsTimeTable />
            <GenericButton label="add client" setTitle={setTitle} />
            <GenericButton label="remove client" setTitle={setTitle} />
            
        </div >
    )
}
export default Students;

