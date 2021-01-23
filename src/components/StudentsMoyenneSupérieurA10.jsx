import React, { useState } from "react";



const StudentsMoyenneSupérieurA10 = (props) => {
    const [isDisplayP, isSetDisplayP] = useState(false);

    return (


        <div>

            <button onClick={() => {

                isSetDisplayP(true)


            }

            }>list Moyenne</button>

  {isDisplayP===true &&  <div>{props.moySupA10.map((studentsSup10) => <div style={{ display: 'flex', gap: "12px" }}> 
              
  <p>{studentsSup10.name}</p>
  
    </div>

          )} 
  
  </div>
} 
<p>Students Moyenne Supérieur A 10</p>
    </div>


    )
}
export default StudentsMoyenneSupérieurA10;