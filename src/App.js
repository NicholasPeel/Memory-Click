import React, { Component } from 'react';
import './App.css';
import Score from "./components/score.js";
import Tile from "./components/tile.js";
import tiles from "./tiles.json"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tiles,
      score: 0,
      topScore: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.shuffle = this.shuffle.bind(this);
    this.updateScore = this.updateScore.bind(this);
  }

  gameOver = () => {
    if (this.state.score > this.state.topScore) {
      this.setState({
        topScore: this.state.score
      });
    }
    this.state.tiles.forEach(tile => {
      tile.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({ score: 0 });
  }
  gameWon = () => {
    alert("You Won");
    this.state.tiles.forEach(tile => {
      tile.count = 0;
    });
    this.setState({ score: 0 });
    this.setState({
      topScore: 12
    });
  }
  updateScore = () => {
    this.setState({
      score: this.state.score + 1
    });
    if (this.state.score === 12) {
      this.gameWon();
    }
  }
  handleClick = id => {
    var tileClicked = this.state.tiles.find((tile) => {
      return tile.id === id;
    });
    if (tileClicked.count === 0) {
      tileClicked.count += 1;
      this.updateScore();
      this.setState({
        tiles: this.shuffle(this.state.tiles)
      });

    } else {
      this.gameOver();
    }

  }

  shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {

    return (
      <div className="app">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Memory Click!</h1>
            <p className="lead">An image based memory game. Click an image to earn points. Click an image more than once and you lose!</p>
          </div>
        </div>
        <div className="score">
          <Score score={this.state.score} topScore={this.state.topScore} />
        </div>
        <div className="tiles">
          {this.state.tiles.map((tile) => (
            <Tile
              imgURL={tile.imgURL}
              id={tile.id}
              key={tile.id}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
