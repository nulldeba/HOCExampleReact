import React from 'react';
import nameHoC from '../hoc/NameHoc';
class Display extends React.Component {
        render() {
        const { name } = this.props;
        return(
            <div>
                <h1>Hello {name}! Good morning</h1>
            </div>
        )
    }
}

export default nameHoC(Display);