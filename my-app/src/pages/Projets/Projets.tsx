import * as React from "react";

interface IProps
{

}

interface IState
{

}

class Projets extends React.Component<IProps, IState>
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
            <div>
                Projets
            </div>
        )
    }
}

export default Projets;