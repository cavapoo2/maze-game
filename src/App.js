import React, { Component } from 'react';
import Grid from './grid';
import Header2 from './header';
import Paragraph from './paragraph';
import Button from './button';
import TableResult from './tableResult'
import HeaderOnOff from './headerOnOff';
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
      ready: false,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleRun = this.handleRun.bind(this);
    this.handleReset = this.handleReset.bind(this);
//    this.handleDebug = this.handleDebug.bind(this);

  }
  handleChange(row, col, { target }) {
    let n = Object.assign({}, this.state);
    if (target.value === 'S' || target.value === 's') {
      n.start = [row, col];
      n.maze[row][col] = 'S';
    }
    else if (target.value === 'e' || target.value === 'E') {
      n.end = [row, col];
      n.maze[row][col] = 'E';
    }
    else if (target.value === 'x' || target.value === 'X') {
      n.maze[row][col] = 'X';
    }
    else {
      n.maze[row][col] = target.value;
    }

    this.setState(n);

  }
  handleRun({ target }) {
    let start = new Coord(this.state.start[0], this.state.start[1]);
    let end = new Coord(this.state.end[0], this.state.end[1]);
    let res = search_maze(this.state.maze, start, end);
    //console.log(res.p,res.r);
    if (res.r === true) {
      let n = Object.assign({}, this.state);
      for (let i = 0; i < res.p.length; i++) {
        if (i === 0) {

          n.maze[res.p[i].i][res.p[i].j] = 'S';
        } else if (i === res.p.length - 1) {

          n.maze[res.p[i].i][res.p[i].j] = 'E';
        } else {
          n.maze[res.p[i].i][res.p[i].j] = 'P';
        }
      }
      n.ready = true;
      this.setState(n);

    }

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
    n.ready = false;
    this.setState(n);
  }
  /*
  handleDebug() {
    console.log('state=', this.state);
  }*/

  render() {
    return (
      <div>
        <Header2 text={"Maze game"} />
        <div className="Layout1">
          <Grid data={this.state.maze} func={this.handleChange} />
          <div>
            <Paragraph name="introPara" text="Create a start S and end E on the grid. Also add X to show that a path can not be taken" />
            <div>
              <Button text="Run" handler={this.handleRun} />
              <Button text="Clear" handler={this.handleReset} />
            </div>
          </div>
        </div>
        <div>
          <HeaderOnOff text="Results" ready={this.state.ready} />
          <div className="Layout2">
            <TableResult data={this.state.maze} ready={this.state.ready} />
            <div>
            {this.state.ready ? <Paragraph name="resPara" text="Showing path taken" /> : <div></div>}
            </div>
          </div>
        </div>
        {/*
        <Button text="Debug" handler={this.handleDebug} />
        */}
      </div>
    );
  }
}

export default App;
