import React, { Component } from 'react';
import './'; // Tell webpack that Button.js uses these styles

class Button extends Component {
    render() {
        // You can use them as regular CSS styles
        return <div className="Button" />;
    }
}