import React, { useState } from "react";



const GenericButton = (props) => {
    const [button, setButton] = useState(false);

    return (
        <div>
            
            <button onClick={() =>
          {
            setButton("");
          }
        }>add client {props.label}</button>
    
        
           
            </div>
            )
            }
            export default GenericButton;