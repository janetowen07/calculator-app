import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.leftNumber} {this.props.operator} {this.props.rightNumber} {this.props.result}</span>
            </div>

        );
    }
}

export default Display;