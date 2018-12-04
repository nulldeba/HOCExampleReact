import React from 'react';
class Message extends React.Component{
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
            data:'Render props works from messageComponent.'
        });
    }

    render()
    {
        return (<div>{this.props.render(this.state)}</div>)
    }
}

export default Message;