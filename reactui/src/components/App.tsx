import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    RouteComponentProps
} from "react-router-dom"
import { Secret } from './Secret';
import Mainpage from './Mainpage'



function App() {
    const renderSecret=({match}:RouteComponentProps<any>)=>{

        return(
            <Secret text={match.params.secret}></Secret>
        );

    }
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Mainpage} />
                <Route path="/secret/:secret" >
                 {renderSecret}
                </Route>
            </Switch>
        </Router>
    );

}

export default App;