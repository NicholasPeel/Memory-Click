import React, { Component } from 'react';

class App extends Component {

    render() {
        return (
            <p>Score: {this.props.score}  |  Top Score: {this.props.topScore}</p>
        );
    }
}

export default App;