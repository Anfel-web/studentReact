import React  from "react";


const StudentSucceed = (props) => {
    
    return (
        <div>
           

             {props.studentsMoySupA10.map((studentsSucceedMoy10) => <div style={{ display: 'flex', gap: "12px" }}>
                <p>{studentsSucceedMoy10.name}</p>
                </div>
            )

            }
            <p>Students Moy sup 10 and specialty telecom</p>
             </div>

       
         )
        }
export default StudentSucceed;