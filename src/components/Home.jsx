import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = (props) => {
  const [students, setStudents] = useState([]);
  
  const [specialities, setSpecialities] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios.get("http://localhost:4000/students");
      setStudents(result.data.students);
    })();
  }, []);
  
  useEffect(() => {
    (async () => {
      const result = await axios.get("http://localhost:4000/specialities");
      setSpecialities(result.data.specialities);
    })();
  }, []);
  console.log("propshomùe",props)
  return (
    <div>
      <h2>Home</h2>
      <p>students:{students.length}</p>
<p>matiers: {props.matiers.length} </p> 
      <p>speciality:{specialities.length}</p>
    </div>
  );
}
export default Home;