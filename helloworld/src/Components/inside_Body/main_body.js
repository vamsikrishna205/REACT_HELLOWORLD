import react, { Component } from 'react';
export class Classprops extends Component {

    render() {
        const mystyle = {
            color: "white",
            backgroundColor: "DodgerBlue",
            padding: "10px",
            fontFamily: "Arial",
            float: "left"
        };
        return (
            <div>
                <h1 style={mystyle}>Hello World!!</h1>
            </div>
        )
    }
}

export default Classprops;