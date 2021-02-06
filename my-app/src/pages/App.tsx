import React from "react";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import NavBar from "../components/global/NavBar/src/NavBar";

import Projets from "./Projets/Projets";
import Contact from "./Contact/Contact";

enum TypeContent
{
    ACCUEIL,
    PROJETS,
    CONTACT,
}

interface IProps
{

}

interface IState
{
    typeContent: TypeContent;
}

class App extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            typeContent: TypeContent.ACCUEIL
        }
    }

    displayHome = (): JSX.Element =>
    {
        return (
            <div>
                Accueil
            </div>
        )
    }

    render = () =>
    {
        return (
            <Router>
                <NavBar/>
                <div style={{marginTop: "200px"}}>
                    <Switch>
                        <Route exact path={"/"}>
                            {this.displayHome()}
                        </Route>
                        <Route exact path={"/projets"}>
                            <Projets/>
                        </Route>
                        <Route exact path={"/contact"}>
                            <Contact/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;
