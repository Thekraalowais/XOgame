$(document).ready(function() {
  console.log("XO Game");
  var player = "";
  var xCount = 0;
  var oCount = 0;
  var gameWon = false;
  var endGame = 0;
  var score = 0;
  // var status = "";
  var grid = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"]];
  var divs = $(".grid-item");
  var playAgain = $(".playagain");

  var myCat = localStorage.getItem("myCat");
  console.log(myCat);

  // When an input is checked,
  $(".clicked").on("click", function() {
    player = $("input[name='rbnNumber']:checked").attr("id");
    console.log(player);
    // console.log($("input[name='rbnNumber']:checked").val());
  });

  divs.on("click", function() {
    // debugger;
    // Loop through rows
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
            // debugger;

            $(this)
              .text(player)
              .addClass("animated swing");
            // console.log(grid[i]);
            // console.log(grid[i][j]);

            winner();
            localStorage.setItem("myCat", "Tom");
            if (!gameWon) {
              switchPlayer();
            }

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
        // divs.off("click");
        score++;
        $(".player1").text(score);
      } else if (oCount === 3) {
        // alert("Congrats player O");
        alertFunction();
        // divs.off("click");
        score++;
        $(".player1").text(score);
      } else {
        endGame++;
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
          // divs.off("click");
          score++;
          $(".player1").text(score);
        } else if (oCount === 3) {
          //   alert("Congrats player O");
          alertFunction();
          // divs.off("click");
          score++;
          $(".player1").text(score);
        } else {
          endGame++;
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
      // divs.off("click");
      score++;
      $(".player1").text(score);
    } else if (
      (grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X") ||
      (grid[0][2] === "O" && grid[1][1] === "O" && grid[2][0] === "O")
    ) {
      // alert("Congrats" + player);
      //   alert("Congrats player " + player);
      alertFunction();
      // divs.off("click");
      score++;
      $(".player1").text(score);
    } else {
      endGame++;
    }
    // console.log("the value" + endGame);

    if (endGame === 117) {
      // console.log("end game");
      swal("Try again");
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
    gameWon = true;
    setTimeout(function() {
      // alert("Congrats player " + player);
      swal("Good job!", "player " + player + " wins", "success");
    }, 50);
  }
  playAgain.on("click", function() {
    location.reload();
    // divs.empty();
  });
});
