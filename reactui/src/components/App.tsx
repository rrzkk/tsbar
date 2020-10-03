import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    RouteComponentProps
} from "react-router-dom"
import { Secret } from './Secret';
import main from './Mainpage'



function App() {
    const renderSecret=({match}:RouteComponentProps<any>)=>{

        return(
            <Secret text={match.params.secret}></Secret>
        );

    }
    return (
        <div className="bg">
        <Router >
            <Switch>
                <Route exact path="/" component={main.Mainpage} />
                <Route path="/secret/:secret" >
                 {renderSecret}
                </Route>
            </Switch>
        </Router>
        <div className="bottom">
            <p>@This website is designed to pass secrets</p>
        </div>
        </div>
    );

}

export default App;