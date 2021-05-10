
import React, { useState, useEffect } from "react";
import axios from "axios";
import Routers from './components/ReactRouter';

function App() {
    const [matiers, setMatiers] = useState([]);
    useEffect(() => {
        (async () => {
          const result = await axios.get("http://localhost:4000/matiers");
          setMatiers(result.data.matiers);
        })();
      }, []);
      
return( 
<div>
<Routers matiers={matiers} setMatiers={setMatiers}/>
</div>
)

};
export default App;