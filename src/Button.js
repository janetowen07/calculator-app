import React from 'react';

class Button extends React.Component {
    
    render() {
        return (
                <button onClick={this.props.handleClick}>
                    {this.props.value}
                    </button>
        );
    }
}

export default Button;  