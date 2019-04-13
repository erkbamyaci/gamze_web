import React from "react";
import {Router, Switch, Route} from "react-router-dom";
import Home from "./routes/home/Home";
import MainLayout from "./components/mainLayout/MainLayout";

import history from "./history";

class App extends React.Component {

    render() {

        return (

            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={MainLayout(Home)}/>
                </Switch>
            </Router>
        );
    }
}

export default App;
