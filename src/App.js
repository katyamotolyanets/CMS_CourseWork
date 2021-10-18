import React, {Component} from "react";
import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import MainPage from "./components/main/MainPage";
import TheoryPage from "./components/theory/TheoryPage";
import StructurePage from "./components/structure/StructurePage";
import AboutPage from "./components/about/AboutPage";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Switch>
                        <Route path="/main/" exact component={MainPage}/>
                        <Route path="/theory/" exact component={TheoryPage}/>
                        <Route path="/structure/" exact component={StructurePage}/>
                    {/*    /!*<Route path="/simulator/" exact component={SimulatorPage}/>*!/*/}
                        <Route path="/about/" exact component={AboutPage}/>
                        <Route component={MainPage}/>

                    </Switch>
                </div>
            </Router>
        );
    }
};

export default App;
