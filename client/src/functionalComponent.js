import React, { useState, useEffect } from 'react';

const FunctionalComponent = (props) => {
    const [myState, setMyState] = useState('California');
    const [apiResponse, setAPIResponse] = useState('');



    const callAPI = () => {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => setAPIResponse(res));
    }

    useEffect(() => {
        setMyState('Florida')
        callAPI();
    }, []);

    const state = myState || 'Mass';
    const message = `The current state is ${state}.`;
    return (
        <div>
            <div>This is my other component.</div>
            <div>{props.myProp}</div>
            <div>{message}</div>
            <h2>API</h2>
            <div>{apiResponse}</div>
        </div>
    );
}

export default FunctionalComponent;
