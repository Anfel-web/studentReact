import React,{ useState } from "react";


const TelecomStudentsSucceed = (props) => {
   const [isDisplayStudentsSucces, setIsDisplayStudentsSucces] =useState(false)
    return (
        <div>
            <button onClick={() => setIsDisplayStudentsSucces(!isDisplayStudentsSucces)}>afficher la liste des étudiants telecom admis </button>
            {
                isDisplayStudentsSucces && <div>
                    <p>la liste des étudiants telecom admis: {props.telecomStudentsAdmis.length}</p>
                    {props.telecomStudentsAdmis.length === 0 ? <p>liste vide</p> : props.telecomStudentsAdmis.map((student) => <div style={{ display: 'flex', gap: "12px" }}>
                        <p>{student.name}</p>
                    </div>
                    )
                    }
                    
                </div>
            }
        </div>
    )
}
export default TelecomStudentsSucceed;