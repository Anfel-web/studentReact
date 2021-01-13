import React from "react";


const StudentsLevel3 = (props) => {
    return (
        <div>

{props.levlequals3.map((studentltem) => <div style={{ display: 'flex', gap: "12px" }}>
   <p>{studentltem.name}</p>
</div>
            )

            }
        </div>
         )
        }
        
        export default StudentsLevel3;