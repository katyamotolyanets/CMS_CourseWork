import React, {Component} from "react";
import './App.scss';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import MainPage from "./components/main/MainPage";

class App extends Component {
    render() {
        return (
            <div className="app">
                <Router>
                    <div className="app">
                        <NavBar/>
                        <Switch>
                            <Route
                                exact
                                path="/"
                                render={() => {
                                    return (
                                            <Redirect to="/main/" />
                                    )
                                }}
                            />
                            <Route path="/main/" exact component={MainPage}/>
                            <Route path="localhost:3000" exact component={MainPage}/>
                        {/*    /!*<Route path="/theory/" exact component={TheoryPage}/>*!/*/}
                        {/*    /!*<Route path="/structure/" exact component={StructurePage}/>*!/*/}
                        {/*    /!*<Route path="/simulator/" exact component={SimulatorPage}/>*!/*/}
                        {/*    /!*<Route path="/about/" exact component={AboutPage}/>*!/*/}
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
};

export default App;
