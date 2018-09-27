import React, { Component } from 'react';
import Grid from './grid';
import Header2 from './header';
import Paragraph from './paragraph';
import Button from './button';
//import './Button.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maze: [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
      ],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);

  }
  handleChange(row, col, { target }) {
    let n = Object.assign({}, this.state);
    n.maze[row][col] = target.value;
    this.setState(n);

  }
  handleClick({ target }) {
    console.log('Button Clicked');
  }
  handleReset() {
    console.log("Rest Clicked");
    let n = Object.assign({},this.state);
    let r = [0,0,0,0,0,0,0,0];
    this.setState({
      maze:[
        r,r,r,r,r,r,r,r
      ],
    });
    /*
    for(let i=0; i < this.state.maze.length; i++) {
      for(let j =0; j < this.state[0].length;j++) {
        n.maze[i][j]=0
      }
    }*/
  }

  render() {
    return (
      <div>
        <Header2 text={"Maze game"} />
        <div className="Layout1">
          <Grid data={this.state.maze} func={this.handleChange} />
          <div>
            <Paragraph text="Create a start S and end E on the grid. Also add X to show that a path can not be taken" />
            <div> 
              <Button text="Run" handler={this.handleClick} />
              <Button text="Clear" handler={this.handleReset} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
