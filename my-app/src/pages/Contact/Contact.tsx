import * as React from "react";

interface IProps
{

}

interface IState
{

}

class Contact extends React.Component<IProps, IState>
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
                Contact
            </div>
        )
    }
}

export default Contact;