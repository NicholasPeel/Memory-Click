import React, { Component } from 'react';
import './tile.css';

class Tile extends Component {

    render() {
        return (
            <div className="tileDiv">
                <img className="tileIMG" src={this.props.imgURL} alt="img" height="200px" width="200px" onClick={() => this.props.handleClick(this.props.id)} />
            </div>
        );
    }
}

export default Tile;