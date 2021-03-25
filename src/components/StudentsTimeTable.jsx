import React, { useState } from "react"
import workingHoursCondition from "../functions/workingHoursCondition";
const StudentsTimeTable = () => {
    const [hours, setHours] = useState(0);
    const [isMax, setIsMax] = useState(false);
    const [isMin, setIsMin] = useState(false);
    const label = workingHoursCondition(hours, isMax, isMin);
    return (
        <div>
            <button
                onClick=
                {() => {
                    if (hours < 6) {
                        setHours(precHours => precHours + 1)
                        setIsMin(false)
                    } else {
                        setIsMax(true)
                    }
                }}>ajouter une heure</button>
            <p>ta travaillé {hours}h</p>
            <p>il reste {6 - hours}h du travail</p>
            <button onClick={() => {

                if (hours > 0) {
                    setHours(precHours => precHours - 1)
                    if (hours === 6) {
                        setIsMax(false)
                    }
                } else {
                    setIsMin(true)
                }
            }}>supprimer une heure</button>
            <p>{label}</p>
        </div>
    );
}
export default StudentsTimeTable;

