import { PureComponent, Fragment } from "react";

class PureComponentTest extends PureComponent {
    render() {
        console.log("PureComponent was rendered at", new Date().toLocaleTimeString());
        return (
            <Fragment>
                <h2>PureComponent</h2>
                <h3>Props value: {this.props.name}</h3>
            </Fragment>
        );
    }
}

export default PureComponentTest;