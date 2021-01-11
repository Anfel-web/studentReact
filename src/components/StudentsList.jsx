import React from "react";


const StudentsList = (props) => {
    return (
        <div>

            {props.students.map((students) => <div style={{ display: 'flex', gap: "12px" }}>

                <p>{students.name}</p>
                <p>{students.age}</p>
                <p> {students.ville}</p>
                <p>{students.moyenne}</p>
                <p>{students.adress}</p>
                <p>{students.specialty}</p>
                <p>{students.level}</p>

                
                    <button onClick ={() => {
                        {props.deleteStudent (students) }
                    }}>delete students</button>
                
            </div>
            )
            }




        </div>

    )
}

export default StudentsList;
