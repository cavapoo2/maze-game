import React, { Component } from 'react';
import Grid from './grid';
import Header2 from './header';
import Paragraph from './paragraph';
import Button from './button';
//import './Button.css';
import './App.css';
import { Coord, search_maze } from './maze';

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
      start: [0, 0],
      end: [7, 7],
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRun = this.handleRun.bind(this);
    this.handleReset = this.handleReset.bind(this);

  }
  handleChange(row, col, { target }) {
    let n = Object.assign({}, this.state);
    if (target.value === 'S' || target.value === 's') {
      console.log('S=', row, col);
      n.start = [row, col];
      n.maze[row][col] = 'S';
    }
    else if (target.value === 'e' || target.value === 'E') {
      console.log('E=', row, col);
      n.end = [row, col];
      n.maze[row][col] = 'E';
    }
    else {
      n.maze[row][col] = target.value;
    }

    this.setState(n);

  }
  handleRun({ target }) {
    console.log('Button Clicked');
    let start = new Coord(this.state.start[0], this.state.start[1]);
    let end = new Coord(this.state.end[0], this.state.end[1]);
    let p = search_maze(this.state.maze, start, end);
    if (p.length > 0) {
      let n = Object.assign({}, this.state);
      for (let i = 0; i < p.length ; i++) {
        if (i === 0) {

          n.maze[p[i].i][p[i].j] = 'S';
        } else if (i === p.length - 1) {

          n.maze[p[i].i][p[i].j] = 'E';
        } else {
          n.maze[p[i].i][p[i].j] = 'P';
        }
      }
      this.setState(n);

    }

    //show the path
    console.log('res=', p);

  }
  handleReset() {
    let n = Object.assign({}, this.state);
    for (let i = 0; i < this.state.maze.length; i++) {
      for (let j = 0; j < this.state.maze[i].length; j++) {
        n.maze[i][j] = 0;
      }
    }
    console.log("Rest Clicked");
    n.end = 0;
    n.start = 0;
    this.setState(n);
    /*
    let r = [0, 0, 0, 0, 0, 0, 0, 0];
    this.setState({
      start:0,
      end:0,
      maze: [
        r, r, r, r, r, r, r, r
      ],
    });
    */
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
              <Button text="Run" handler={this.handleRun} />
              <Button text="Clear" handler={this.handleReset} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
