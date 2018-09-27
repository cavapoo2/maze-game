export class Coord {
    constructor(i,j) {
        this.i = i;
        this.j=j;

    }
    equal(coord) {
          if(this.i === coord.i && this.j === coord.j){
                return true;
          }else {
              return false;
          }
        
    }
};

function is_possible(coord, maze) {
    if(coord.i >= 0 && coord.j >= 0 && coord.i < maze.length && coord.j < maze.length && 
    (maze[coord.i][coord.j] === 0 || maze[coord.i][coord.j] === 'E')) {
        return true;
    }else {
        //console.log('Not poss');
        return false;
    }
}

function maze_helper(maze, cur, end, path) {
    if(cur.equal(end)) {
     return true;
    }

    
    let dirs = [
        [0,1],
        [0,-1],
        [1,0],
        [-1,0]
    ];
    for(let i=0; i < dirs.length; i++) {
        let next = new Coord(cur.i + dirs[i][0],cur.j + dirs[i][1]);

        if(is_possible(next,maze) === true) {
            maze[next.i][next.j] = 1;
            path.push(next);
            if(maze_helper(maze,next,end,path)) {
                return true;
            }
            path = path.slice(0,path.length-1);
        }
    }
    return false;
}

export function search_maze(maze,start,end) {
    let path=[];
    let res=true;
    maze[start.i][start.j] = 1;
    path.push(start);
    if(maze_helper(maze,start,end,path) === false) {
        path = path.slice(0,path.length-1);
        res=false;
    }
    return {p:path,r:res};
}