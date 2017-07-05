import React from 'react';
import Button from './Button';

const values = [
    ['AC', '+/-', '%'],
    ['/'],
    ['x'],
    ['-'],
    ['+'],
    ['=']
];

class OperationButton extends React.Component {
    render() {
        return (
            <div>
                {values.map((row, i) => {
                    return (
                        <div key={i} 
                            className="row">
                            {row.map((value) => {
                                return <Button key={value} value={value} handleClick={this.props.addOperator} />;
                            })}
                        </div>
                    );
                })}
        </div>
        )
        
    }
}

export default OperationButton;