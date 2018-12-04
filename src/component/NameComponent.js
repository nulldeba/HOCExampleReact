import React from 'react';
class Name extends React.Component{
    constructor(props)
    {   
        super(props);
        this.state={
            data:''
        }
    }
    componentDidMount()
    {
        this.setState({
            data:'Render props works from namecomponent.'
        });
    }

    render()
    {
        return (<div>{this.props.render(this.state)}</div>)
    }
}

export default Name;