import React from 'react';
import Name from './NameComponent';
import Message from './MessageComponent';
class Display extends React.Component {
    render() {
        return (
            <div>
                <Name render=
                    {nameData => (
                        <Message render=
                            {messageData => (
                                <h1>Hi {nameData.data}! {messageData.data}</h1>
                            )}
                        />
                    )}
                />
            </div>
        )
    }
}

export default Display;