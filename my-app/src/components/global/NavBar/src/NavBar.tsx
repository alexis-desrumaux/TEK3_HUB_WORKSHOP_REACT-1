import * as React from "react";

import {Link} from "react-router-dom";

import "../styles/NavBar.css";

interface IProps
{
}

interface IState
{

}

class NavBar extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {

        }
    }

    render = (): JSX.Element =>
    {
        return (
            <div id={"navBar"}>
                <div id={"navBar_top"}>
                    <p id={"navBar_top_title"}>Mon site web</p>
                </div>
                <div id={"navBar_bottom"}>
                    <div id={"navBar_bottom_links"}>
                        <Link to={"/"}>
                            <button className={"navBar_bottom_links_link"}>
                                Accueil
                            </button>
                        </Link>
                        <Link to={"/projets"}>
                            <button className={"navBar_bottom_links_link"}>
                                Projets
                            </button>
                        </Link>
                        <Link to={"/contact"}>
                            <button className={"navBar_bottom_links_link"}>
                                Contact
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavBar;