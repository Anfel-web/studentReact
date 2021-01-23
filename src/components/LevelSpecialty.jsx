import React from "react";


const LevelSpecialty = (props) => {
    return (
        <div>

{props.level3SpecT.map((levelSpeci) => <div style={{ display: 'flex', gap: "12px" }}>
   <p>{levelSpeci.name}</p>
</div>
            )

            }
            <p>student Level 1 and Specialty telecom</p>
             </div>

       
         )
        }
        
        export default LevelSpecialty;