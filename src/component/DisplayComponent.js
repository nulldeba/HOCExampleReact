import React from 'react';
import nameHoC from '../hoc/NameHoc';
import messageHoc from '../hoc/MessageHoc';
class Display extends React.Component {
        render() {
        const { name, message } = this.props;
        return(
            <div>
                <h1>Hello {name}! {message}</h1>
            </div>
        )
    }
}

export default messageHoc(nameHoC(Display));