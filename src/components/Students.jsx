import React, { useState } from "react";
import StudentsList from "../components/StudentsList";
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
    console.log("students",students)
    const levlequals3 = students.filter((studentltem) => studentltem.level == 3);
    console.log("levlequals3",levlequals3)
    return (
        <div>
            {levlequals3.map(studentltem => {
               return <p>{studentltem}</p>
            })}
        name:     <input value={name} onChange={(e) => setName(e.target.value)} />
        age :     <input value={age} onChange={(e) => setAge(e.target.value)} />
        ville :   <input value={ville} onChange={(e) => setVille(e.target.value)} />
        moyenne:  <input value={moyenne} onChange={(e) => setMoyenne(e.target.value)} />
        adress:   <input value={adress} onChange={(e) => setAdress(e.target.value)} />
        specialty:   <input value={specialty} onChange={(e) => setSpecialty(e.target.value)} />
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
            </div>gi
<StudentsList students={students} deleteStudent={deleteStudent} />
</div>
    )
};
export default Students;