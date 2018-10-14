console.log("XO Game");
var player = "X";
var grid = [
    ["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"]
];

function player() {
    for (var i = 0; i < grid.length; i++) {
        for (var j = 0; j < grid[i].length; j++) {
            console.log(grid[i][j]);
        }
        console.log(grid[i]);
    }
}
player();