import React, { useState, useEffect } from "react";
import axios from "axios";
function TestSpeciality() {
    const [specialities, setSpecialities] = useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        (async () => {
            const result = await axios.get("http://localhost:4000/specialities");
    
          setSpecialities(result.data.specialities);
        })();
    }, []);
    return (
        <div>
            name: <input value={name} onChange={(e) => setName(e.target.value)} />
            <button
                onClick={async () => {
                    const newSpecilaity = { name }
                    const result = await axios.post("http://localhost:4000/specialities", newSpecilaity);
                    setSpecialities([...specialities, result.data.speciality])
                }}>add specialty</button>
            {specialities.map((specialty) => (
                <div style={{ display: "flex " }} key={specialty._id}>
                    <p>{specialty.name}</p>
                    <button onClick={async () => {
                        await axios.delete(`http://localhost:4000/specialities/${specialty._id}`)
                        
                        const specialityDelete = specialities.filter(spe => spe._id !== specialty._id)
                        setSpecialities(specialityDelete)
                    }}>delete specialty</button>
                </div>
            ))}
        </div>
    );
}
export default TestSpeciality;