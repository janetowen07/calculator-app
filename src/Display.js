import React from 'react';

class Display extends React.Component {
    render() {
        return (
            <div>
                <span>{this.props.leftNumber} {this.props.operator} {this.props.rightNumber}</span>
            </div>

        );
    }
}

export default Display;