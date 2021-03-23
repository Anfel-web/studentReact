import React, { useState } from "react"
import workingHoursCondition from "../functions/workingHoursCondition";
const StudentsTimeTable = () => {
    const [hours, setHours] = useState(0);
const label=workingHoursCondition(hours);
    return (
        <div>
            <button
                onClick=
                {() => {
                    // condition 
                    if (hours < 6) {
                        setHours(precHours => precHours + 1)
                    }
                }}>ajouter une heure</button>
            <p>ta travaillé {hours}h</p>
            <p>il reste {6 - hours}h du travail</p>
            <button onClick={() => {
                // condition 
                setHours(precHours => precHours - 1)
            }}>supprimer une heure</button>
            <p>workingHoursCondition égale:{label} </p>
        </div>
    );
}
export default StudentsTimeTable;

// si hours === 0 cliquer sur le button afficher "il faut cliquer sur button ajouter une heure"
// metnajmich tna9is e9el men 0 w metnajmich tzid akther men 6
// ki tzid akther men 6 taffichi "tu peut ajouter 6maximum"
// ki tzid tna9Ed akther men 0 taffichi "tu peut supprimer maximum 0" 