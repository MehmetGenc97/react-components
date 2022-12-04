import React, { Fragment } from "react";

function FunctionComponent({name}) {
    console.log("FunctionComponent was rendered at", new Date().toLocaleTimeString());
    return (
        <Fragment>
            <h2>FunctionComponent</h2>
            <h3>Props value: {name}</h3>
        </Fragment>
    );
}

export default FunctionComponent;