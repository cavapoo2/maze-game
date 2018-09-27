class Coord {
    constructor(i,j) {
        this.i = i;
        this.j=j;

    }
    equal(coord) {
        return this.i === coord.i && this.j === coord.j;
    }
};

function is_possible(coord, maze) {
    return coord.i >= 0 && coord.j >= 0 && coord.i < maze.length() && coord.j < maze.length && 
    maze[coord.i][coord.j] === 0;
}

function maze_helper(maze, cur, end, path) {
    if(cur.equal(end)) return true;
    
    let dirs = [
        [0,1],
        [0,-1],
        [1,0],
        [-1,0]
    ];
    for(let d in dirs) {
        let next = Coord(cur.i + d[0],cur.y + d[1]);
        if(is_possible(next,maze)) {
            maze[next.i][next.j] = 1;
            path.push(next);
            if(maze_helper(maze,next,end,path)) {
                return true;
            }
            path.slice(0,path.length-1);
        }
    }
    return false;
}

export function search_maze(maze,start,end) {
    let path=[];
    maze[start.i][start.j] = 1;
    path.push(start);
    if(maze_helper(maze,start,end,path) === false) {
        path.slice(0,path.length-1);
    }
    return path;
}