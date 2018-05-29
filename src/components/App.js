import React, { Component } from 'react';

class Button extends React.Component {
    startTimer(event) {
        return this.props.startTimer(this.props.time);
    }
    render() {
        return React.createElement(
            'button',
            {
                type: 'button',
                className: 'btn-default btn',
                onClick: () => {
                    this.props.startTimer(this.props.time);
                }
            },
            this.props.time,
            ' seconds'
        );
    }
}
export default Button;