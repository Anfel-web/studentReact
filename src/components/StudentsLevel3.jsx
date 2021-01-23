import React, { useState } from "react";


const StudentsLevel3 = (props) => {
    const [isStudentsLevel3, isSetStudentsLevel3] = useState(false);
    return (
        <div>
            <button onClick={() => {

                isSetStudentsLevel3(true)


            }

            }>list level 3</button>

            {isStudentsLevel3 === true && <div> {props.levlequals3.map((studentltem) => <div style={{ display: 'flex', gap: "12px" }}>
                <p>{studentltem.name}</p>
            </div>

            )}

            </div>
            }
            <p>student level 3</p>
        </div>


    )
}
export default StudentsLevel3;