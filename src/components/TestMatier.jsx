import React, { useState, useEffect } from "react";
import axios from "axios";
function TestMatier() {
    const [matiers, setMatiers] = useState([]);
    const [name, setName] = useState("");
    const [nombreHours, setNombreHours] = useState(0);
    const [cofficient, setCofficient] = useState(0);

    useEffect(() => {
        (async () => {
            const result = await axios.get("http://localhost:4000/matiers");
    
            setMatiers(result.data.matiers);
        })();
    }, []);

    return (
        <div>
            name: <input value={name} onChange={(e) => setName(e.target.value)} />
            nombreHours :{" "}
            <input value={nombreHours} onChange={(e) => setNombreHours(Number(e.target.value))} />
      cofficient:{" "}
            <input value={cofficient} onChange={(e) => setCofficient(Number(e.target.value))} />
            <button
                onClick={async () => {
                    const newMatier = { name, nombreHours, cofficient }
                    const result = await axios.post("http://localhost:4000/matiers", newMatier);
                    setMatiers([...matiers, result.data.matier])
                }}>add matier</button>
            {matiers.map((matier) => (
                <div style={{ display: "flex " }} key={matier._id}>
                    <p>{matier.name}</p>
                    <p>{matier.nombreHours}</p>
                    <p>{matier.cofficient}</p>
                    <button onClick={async () => {
                        await axios.delete(`http://localhost:4000/matiers/${matier._id}`)
                        const matierDelete = matiers.filter(mat => mat._id !== matier._id)
                        setMatiers(matierDelete)
                    }}>delete matier</button>
                </div>
            ))}
        </div>
    );
}
export default TestMatier;
// jawik behi felfoultii heya bye tw 