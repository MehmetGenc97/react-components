import {Fragment, memo} from "react";

const FunctionComponentWithMemo = memo(function FunctionComponentWithMemo({name}) {
    console.log("FunctionComponentWithMemo was rendered at", new Date().toLocaleTimeString());
    return (
        <Fragment>
            <h2>FunctionComponent with memo</h2>
            <h3>Props value: {name}</h3>
        </Fragment>
    )
});

export default FunctionComponentWithMemo;