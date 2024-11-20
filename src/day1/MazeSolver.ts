const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
];

function walk(maze: string[], wall: string, currentPoint: Point, end: Point, seen: boolean[][], path: Point[]): boolean {
    // 1. Base case
    // off the map
    if (currentPoint.x < 0 || currentPoint.x >= maze[0].length || currentPoint.y < 0 || currentPoint.y >= maze.length) {
        return false;
    }

    // on a wall
    if (maze[currentPoint.y][currentPoint.x] === wall) {
        return false;
    }

    // at the end
    if (currentPoint.x == end.x && currentPoint.y === end.y) {
        path.push(end);
        return true;
    }

    // already seen
    if (seen[currentPoint.y][currentPoint.x]) {
        return false;
    }

    // 2. recurse
    // pre
    seen[currentPoint.y][currentPoint.x] = true;
    path.push(currentPoint);

    // recuse
    for (let directionIndex = 0; directionIndex < directions.length; directionIndex++) {
        const [moveX, moveY] = directions[directionIndex];
        if (walk(maze, wall, {
            x: currentPoint.x + moveX,
            y: currentPoint.y + moveY,
        }, end, seen, path)) {
            return true;
        };
    }

    // post
    path.pop();

    return false;
}

export default function solve(
    maze: string[],
    wall: string,
    start: Point,
    end: Point,
): Point[] {
    const seen: boolean[][] = [];
    const path: Point[] = [];

    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false));
    }

    walk(maze, wall, start, end, seen, path);

    return path;
}
