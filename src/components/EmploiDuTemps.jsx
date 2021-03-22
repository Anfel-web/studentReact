import React, { useState } from "react"
const EmploiDuTemps = () => {
    const [timeButton, setTimeButton] = useState(0);
    const [heures, setHeures] = useState(0);
    return (
        <div>
            <button
                onClick={() => {

                    setTimeButton(timeButton + 1)
                }}>increment time</button>
            <p>{timeButton} </p>
            <p> {6 - heures}</p>
            <button onClick={() => {
                setTimeButton(timeButton - 1)
            }}>decrement time</button>
    
        </div>
    );
}
export default EmploiDuTemps;