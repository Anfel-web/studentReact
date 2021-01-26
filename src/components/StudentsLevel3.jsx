import React, { useState } from "react";


const StudentsLevel3 = (props) => {
    const [isDisplayStudents, setIsDisplayStudents] = useState(false);
    return (
        <div>
            <button onClick={() => {
                setIsDisplayStudents(!isDisplayStudents)
            }
            }>afficher la lise de étudiant de 3émme année</button>
            {isDisplayStudents && <div> 
                <p>la liste des étudiant de 3émme année: {props.studentsWithLevel3.length}</p>

                {props.studentsWithLevel3.length === 0 ? <p>liste vide </p> : props.studentsWithLevel3.map((studentltem) => <div style={{ display: 'flex', gap: "12px" }}>
                <p>{studentltem.name}</p>
            </div>

            )}

            </div>
            }
        </div>


    )
}
export default StudentsLevel3;