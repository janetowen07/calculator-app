import React from 'react';
import Button from './Button';

const values = [
    [7, 8, 9],
    [4, 5, 6],
    [1, 2, 3],
    [0, '.']
];

class NumberButton extends React.Component {
    render() {
        return (
            <div>
                {values.map((row, i) => {
                    return (
                        <div key={i} className="row">
                            {row.map((value) => {
                                return <Button 
                                key={value} 
                                value={value}
                                handleClick={this.props.addNumber} 
                                />;
                            })}
                        </div>
                    );
                })}
        </div>
        );
        
    }
}

export default NumberButton;