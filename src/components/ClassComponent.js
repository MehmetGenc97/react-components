import { Component, Fragment } from "react";

class ClassComponent extends Component {
    render() {
        console.log("ClassComponent was rendered at", new Date().toLocaleTimeString());
        return (
            <Fragment>
                <h2>ClassComponent</h2>
                <h3>Props value: {this.props.name}</h3>
            </Fragment>
        );
    }
}

export default ClassComponent;