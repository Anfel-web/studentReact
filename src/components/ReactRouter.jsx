import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Students from "./Students";
import Home from './Home';
import TestMatier from "./TestMatier";
import TestSpeciality from "./TestSpeciality";

// deux routes paths urls specoalties matiers yaffichio les composant eli homa déja mawjoudin TestMatier w TestSpeciality
export default function Routers(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              {/* ki tickliki 3ala Home methout chy fi url khatr fema slash akhw  */}
              <Link to="/">Home</Link>
            </li>
            <li>
              {/* ki tickliki 3ala students bch thout fi url /students */}
              <Link to="/students">studentssssss</Link>
            </li>
            <li>
              <Link to="/matiers">matiers</Link>
            </li>
            <li>
              <Link to="/specialities">specialities</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {/* ki tal9A fi url students affichi el composant eli mawjoud fi west route  <Students /> */}
          <Route path="/students">
            <Students />
          </Route>
          <Route path="/matiers">
            <TestMatier matiers={props.matiers} setMatiers={props.setMatiers} />
          </Route>
          <Route path="/specialities">
            <TestSpeciality />
          </Route>
          <Route path="/">
            {/* ki tal9A fi url hetta chay affichi el composant eli mawjoud fi west route  <Home /> */}
            <Home matiers={props.matiers}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
