import React, {Component} from 'react';

class HelloClass extends Component {
    render() {
        return (
            <div>
            <h1>Hello Class</h1>
            <h1>{this.props.nesto}</h1>
            </div>
        )
    }
}

export default HelloClass;