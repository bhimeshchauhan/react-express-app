// MyOtherComponent.js
import React, { Component } from 'react';

class ClassComponent extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          myState: 'California',
          apiResponse: ''
        }
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        this.setState({myState: 'Florida'});
        this.callAPI();
    }

    render() {
        const myProp = this.props.myProp;
        const myState = this.state.myState || 'Mass';
        const message = `The current state is ${myState}.`;
        return (
            <div>
                <div>This is my other component.</div>
                <div>{myProp}</div>
                <div>{message}</div>
                <h2>API</h2>
                <div>{this.state.apiResponse}</div>
            </div>
        );
    }
}

export default ClassComponent;