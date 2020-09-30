import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from "react-dom"
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom"
import { Secret } from './Secret';
import Mainpage from './Mainpage'


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Mainpage} />
                <Route path="/secret">
                    <Secret text=''></Secret>
                </Route>
            </Switch>
        </Router>
    );

}

export default App;