$(document).ready(function () {
    console.log("XO Game");
    var player = "X";
    var xCount = 0;
    var oCount = 0;
    var grid = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"]];
    var divs = $('.grid-item');

    // function game() {
    divs.on('click', function () {
        // debugger;
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
        winner();
        // console.log(grid);
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
    function winner() {
        //check rows
        for (var i = 0; i < 3; i++) {
            // console.log(grid.length); 
            // Loop through columns
            for (var j = 0; j < 3; j++) {
                if (grid[i][j] === "X") {
                    xCount++;
                } else {
                    oCount++
                }
            }
        }
        //check columns
        for (var i = 0; i < 3; i++) {
            // console.log(grid.length); 
            // Loop through columns
            for (var j = 0; j < 3; j++) {
                if (grid[j][i] === "X") {
                    xCount++;
                } else {
                    oCount++
                }
            }
        }
        console.log(xCount + " " + oCount);
        // if (xCount === 3) {
        //     alert("Congrats player X");

        // } else if (oCount === 3) {
        //     alert("Congrats player O");

        // } 
        if (grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X") {
            // alert("Congrats" + player);
            alert("Congrats player X");
        } else if (grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X") {
            // alert("Congrats" + player);
            alert("Congrats player O");

        }
    }
    function switchPlayer() {
        if (player === "X") {
            player = "O";
        } else {
            player = "X";
        }
    }

})