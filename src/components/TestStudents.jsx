import React, { useState, useEffect } from "react";
import axios from "axios";

function TestStudents() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [ville, setVille] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //résumer :
  //get  axios.get et url 
  // lezem tkoun fi useEffect ba3ed me axios yjib data men base n7outha fi state 
  // w fi return naffichi state 
  // add axios.post et url w data eli bch tzidha 
  // axios.post bch yzid fi base de donnes mel affichage non pourquoi ?
  // 5ater fi useEffect jibna resultat mel base w 7atineha fi state students w affichina state students 
  // donc yekzm ba3ed men najouti fi base lezem nzidou fi state students 5aterha hia affiché


  // delete axios.delete 
  // yzid fi base b axios.delete w ba3ed lezem nfasse5 el element men state bi _id 





  // useEffect une fonction react sera executé directement apres le rendu de compsant chma3neha
  // ma3neha composant ya3ml return w ba3ed yexecuti eli fi west useEffect
  useEffect(async () => {
    // axios tadhreb 3al api w ta3tih url mte3ou eli mawjoudin fi node
    // na3tyouh el methode (get/post/delete/put) w url de l'api 'http://localhost:4000/students'
    // yestena lin tji result mel api w ba3ed yet3eda lili ba3dou
    const result = await axios.get("http://localhost:4000/students");

    setStudents(result.data.students);
  }, []);
  console.log("students", students);
  return (
    <div>
      name: <input value={name} onChange={(e) => setName(e.target.value)} />
      age :{" "}
      <input value={age} onChange={(e) => setAge(Number(e.target.value))} />
      ville : <input value={ville} onChange={(e) => setVille(e.target.value)} />
      email: <input value={email} onChange={(e) => setEmail(e.target.value)} />
      password:{" "}
      <input value={password} onChange={(e) => setPassword(e.target.value)} />
      <button
        onClick={async () => {
          const newStudent = { name, age, ville, email, password };
          // post il faut donner la methode post w envoyer les données bch nenregistrihom fi base
          const result = await axios.post(
            "http://localhost:4000/students",
            newStudent
          );
          console.log("result", result);
          //  ... spread on va concatener les ancienq elements eli mawjoudin fi state sudents m3a el element eli da5altou
          setStudents([...students, newStudent])

        }}
      >
        add étudiant
      </button>
      {students.map((student) => (
        <div style={{ display: "flex " }}>
          <p>{student.name}</p>
          <p>{student.email}</p>
          <p>{student.ville}</p>
          <button onClick={async () => {
            //
            await axios.delete(`http://localhost:4000/students/${student._id}`)
            // filter raja3li lista mte3 student eli id mte3hom differents mel id student eli cliquit bch nsupprimih
            const studentDelete = students.filter(std => std._id !== student._id)
            setStudents(studentDelete)
          }}>delete étudiant</button>
        </div>
      ))}
    </div>
  );
}
export default TestStudents;
