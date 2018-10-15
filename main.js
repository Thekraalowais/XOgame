$(document).ready(function() {
  console.log("XO Game");
  var player = "X";
  var xCount = 0;
  var oCount = 0;
  var grid = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"]];
  var divs = $(".grid-item");
  //   var backPage = $(".backArrow");
  var playAgain = $(".playagain");
  // function game() {
  divs.on("click", function() {
    // debugger;
    // Loop through rows
    // rotation();
    if ($(this).text() === "") {
      for (var i = 0; i < 3; i++) {
        // console.log(grid.length);
        var id = $(this).attr("id");
        // console.log("The ID is " + id);
        // Loop through columns
        for (var j = 0; j < 3; j++) {
          if (grid[i][j] === id) {
            grid[i][j] = player;
            // console.log(player);

            $(this).text(player);
            // console.log(grid[i]);
            // console.log(grid[i][j]);
            winner();
            switchPlayer();
            // console.log("The array value is " + grid[i][j]);
          }
        }
      }
    } else {
      alert("Choose another cell");
    }
  });
  function winner() {
    //check rows
    // debugger;
    for (var i = 0; i < 3; i++) {
      // console.log(grid.length);
      // Loop through columns
      for (var j = 0; j < 3; j++) {
        if (grid[i][j] === "X") {
          xCount++;
        } else if (grid[i][j] === "O") {
          oCount++;
        }
      }
      if (xCount === 3) {
        // alert("Congrats player X");
        alertFunction();
        divs.off("click");
      } else if (oCount === 3) {
        // alert("Congrats player O");
        alertFunction();
        divs.off("click");
      }
      xCount = 0;
      oCount = 0;
    }
    //check columns
    for (var i = 0; i < 3; i++) {
      // console.log(grid.length);
      // Loop through columns
      for (var j = 0; j < 3; j++) {
        if (grid[j][i] === "X") {
          xCount++;
        } else if (grid[j][i] === "O") {
          oCount++;
        }
        if (xCount === 3) {
          //setTimeout
          //   alert("Congrats player X");
          alertFunction();
          divs.off("click");
        } else if (oCount === 3) {
          //   alert("Congrats player O");
          alertFunction();
          divs.off("click");
        }
      }
      xCount = 0;
      oCount = 0;
      console.log(xCount + " " + oCount);
      // xCount = 0; oCount=0;
    }
    if (
      (grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X") ||
      (grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === "O")
    ) {
      // alert("Congrats" + player);
      //   alert("Congrats player " + player);
      alertFunction();
      // alertFunction()
      divs.off("click");
    } else if (
      (grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X") ||
      (grid[0][2] === "O" && grid[1][1] === "O" && grid[2][0] === "O")
    ) {
      // alert("Congrats" + player);
      //   alert("Congrats player " + player);
      alertFunction();
      divs.off("click");
    }
  }
  function switchPlayer() {
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
  }
  function alertFunction() {
    setTimeout(function() {
      alert("Congrats player " + player);
    }, 1000);
  }
  playAgain.on("click", function() {
    location.reload();
  });

  //   backPage.on("click", function() {
  //     window.location = "home.html";
  //   });
});

//style
// function rotation(){
//     $('.grid-item').rotate({
//       angle:0,
//       animateTo:360,
//       callback: rotation
//     });
//   }
