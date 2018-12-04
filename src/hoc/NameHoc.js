import React from 'react';
const nameHoC = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                name: ""
            };
        }

        componentDidMount() {
           //Here we can fetch the data by calling an API 
           //and then set the state
           //here I have used static data
           this.setState({name: "Michael"});
        }

        render() {
            const {name} = this.state;
            return(
                <div>
                    <WrappedComponent{...this.props} name={name}/>
                </div>
            )
        }
    }
};
export default nameHoC;