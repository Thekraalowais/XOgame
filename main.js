$(document).ready(function () {
    console.log("XO Game");
    var player = "X";
    var grid = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"]];
    var divs = $('.grid-item');

    // function game() {
    divs.on('click', function () {
        debugger;
        // Loop through rows
        if ($(this).text() === "") {
            for (var i = 0; i < 3; i++) {
                // console.log(grid.length); 
                var id = $(this).attr('id');
                // console.log("The ID is " + id);
                // Loop through columns
                for (var j = 0; j < 3; j++) {
                    if (grid[i][j] === id) {
                        grid[i][j] = player;
                        // console.log(player);
                        $(this).text(player);
                        // console.log(grid[i]);
                        // console.log(grid[i][j]);
                        switchPlayer();
                        // console.log("The array value is " + grid[i][j]);
                    }
                }
            }
        } else {
            alert("Choose another cell");
        }

        console.log(grid);
        // if ($(this).text() === "") {
        //     console.log("empty");
        //     $(this).text(player);
        //     var id = $(this).attr('id');
        //     grid[id] = player;
        //     switchPlayer();
        // } else {
        //     alert("Choose another cell");
        // }

    });

    function switchPlayer() {
        if (player === "X") {
            player = "O";
        } else {
            player = "X";
        }
    }

})