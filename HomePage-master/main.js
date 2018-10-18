$(document).ready(function() {
  console.log("XO Game");
  var player = "X";
  var xCount = 0;
  var oCount = 0;
  var gameWon = false;
  var endGame = 0;
  var grid = [["0", "1", "2"], ["3", "4", "5"], ["6", "7", "8"]];
  var divs = $(".grid-item");
  var playAgain = $(".playagain");
  var reset = $(".reset");
  var backPage = $(".backArrow");
  var player1 = $(".player1");
  var player2 = $(".player2");
  //player 1
  var currentValue = sessionStorage.getItem("player1");
  if (currentValue === null) {
    currentValue = sessionStorage.setItem("player1", 0);
  }
  console.log(currentValue);
  $(".player1").text(currentValue);
  // player 2
  var currentValue = sessionStorage.getItem("player2");
  if (currentValue === null) {
    currentValue = sessionStorage.setItem("player2", 0);
  }
  $(".player2").text(currentValue);
  // When an input is checked,
  $(".clicked").on("click", function() {
    player = $("input[name='rbnNumber']:checked").attr("id");
    console.log(player);
    board();
  });
  function board() {
    divs.on("click", function() {
      // Loop through rows
      if ($(this).text() === "") {
        for (var i = 0; i < 3; i++) {
          var id = $(this).attr("id");
          // Loop through columns
          for (var j = 0; j < 3; j++) {
            if (grid[i][j] === id) {
              grid[i][j] = player;
              $(this)
                .text(player)
                .addClass("animated swing");

              winner();
              if (!gameWon) {
                switchPlayer();
              }
            }
          }
        }
      } else {
        alert("Choose another cell");
      }
    });
  }
  function winner() {
    //check rows
    for (var i = 0; i < 3; i++) {
      // Loop through columns
      for (var j = 0; j < 3; j++) {
        if (grid[i][j] === "X") {
          xCount++;
          // console.log(grid[i]);
          // console.log(grid);
        } else if (grid[i][j] === "O") {
          oCount++;
        }
      }
      if (xCount === 3) {
        console.log(xCount);
        alertFunction();
        divs.off("click");
        score("player1", player1);
      } else if (oCount === 3) {
        alertFunction();
        divs.off("click");
        score("player2", player2);
      } else {
        endGame++;
      }
      xCount = 0;
      oCount = 0;
    }
    //check columns
    for (var i = 0; i < 3; i++) {
      // Loop through columns
      for (var j = 0; j < 3; j++) {
        if (grid[j][i] === "X") {
          xCount++;
          console.log("the j is" + j + "the i is " + i);
        } else if (grid[j][i] === "O") {
          oCount++;
        }
        if (xCount === 3) {
          alertFunction();
          divs.off("click");
          score("player1", player1);
        } else if (oCount === 3) {
          alertFunction();
          divs.off("click");
          score("player2", player2);
        } else {
          endGame++;
        }
      }
      xCount = 0;
      oCount = 0;
      // console.log(xCount + " " + oCount);
    }
    if (grid[0][0] === "X" && grid[1][1] === "X" && grid[2][2] === "X") {
      alertFunction();
      divs.off("click");
      score("player1", player1);
    } else if (grid[0][2] === "X" && grid[1][1] === "X" && grid[2][0] === "X") {
      alertFunction();
      divs.off("click");
      score("player1", player1);
    } else if (grid[0][0] === "O" && grid[1][1] === "O" && grid[2][2] === "O") {
      alertFunction();
      divs.off("click");
      score("player2", player2);
    } else if (grid[0][2] === "O" && grid[1][1] === "O" && grid[2][0] === "O") {
      alertFunction();
      divs.off("click");
      score("player2", player2);
    } else {
      endGame++;
    }
    if (endGame === 117) {
      document.getElementById("fail").play();
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
      document.getElementById("xyz").play();
      swal("Good job!", "player " + player + " won", "success");
    }, 50);
  }
  playAgain.on("click", function() {
    location.reload();
  });

  reset.on("click", function() {
    sessionStorage.clear();
    //player 1
    currentValue = sessionStorage.getItem("player1");
    // if (currentValue === null) {
    //   currentValue = sessionStorage.setItem("player1", 0);
    // }
    console.log(currentValue);
    $(".player1").text(currentValue);
    // player 2
    currentValue = sessionStorage.getItem("player2");
    // if (currentValue === null) {
    //   currentValue = sessionStorage.setItem("player2", 0);
    // }
    $(".player2").text(currentValue);
    // console.log("reset");
    location.reload();
  });
  backPage.on("click", function() {
    sessionStorage.clear();
    window.open("../index.html", "_self");
  });
  function score(key, turn) {
    var current = sessionStorage.getItem(key);
    current = parseInt(current);
    var addedVakue = current + 1;
    sessionStorage.setItem(key, addedVakue);
    turn.text(addedVakue);
  }
});
