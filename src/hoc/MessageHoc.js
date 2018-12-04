import React from 'react';
const messageHoc = (WrappedComponent) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                message: ''
            };
        }

        componentDidMount()
        {
            this.setState({message:"multiple HOC worked"});
        }
         
        render(){
            return(
                <div><WrappedComponent{...this.props}  message={this.state.message}  /></div>
            );
        }
    }
}

export default messageHoc;