export const isTouchDevice = () => {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
};

const snakeGame = () => {
  const currentHighScore = localStorage.getItem("highscoreSnakeAlexisLenoir");

  if (currentHighScore) {
    document.getElementById("highscore").innerHTML = currentHighScore;
  }

  const canvas = document.getElementById("gameCanvas");
  if (canvas) {
    const context = canvas.getContext("2d");
    let grid = 16;
    let count = 0;
    let score = 0;
    let max = currentHighScore || 0;

    let snake = {
      x: 160,
      y: 160,

      // snake velocity. moves one grid length every frame in either the x or y direction
      dx: grid,
      dy: 0,

      // keep track of all grids the snake body occupies
      cells: [],

      // length of the snake. grows when eating an apple
      maxCells: 4,
    };
    let apple = {
      x: 288,
      y: 288,
    };

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    // game loop
    function loop() {
      requestAnimationFrame(loop);

      // slow game loop to 15 fps instead of 60 (60/15 = 4)
      if (++count < 4) {
        return;
      }

      count = 0;
      context.clearRect(0, 0, canvas.width, canvas.height);

      // move snake by it's velocity
      snake.x += snake.dx;
      snake.y += snake.dy;

      // wrap snake position horizontally on edge of screen
      if (snake.x < 0) {
        snake.x = canvas.width - grid;
      } else if (snake.x >= canvas.width) {
        snake.x = 0;
      }

      // wrap snake position vertically on edge of screen
      if (snake.y < 0) {
        snake.y = canvas.height - grid;
      } else if (snake.y >= canvas.height) {
        snake.y = 0;
      }

      // keep track of where snake has been. front of the array is always the head
      snake.cells.unshift({ x: snake.x, y: snake.y });

      // remove cells as we move away from them
      if (snake.cells.length > snake.maxCells) {
        snake.cells.pop();
      }

      // draw apple
      context.fillStyle = "#c060a1";
      context.fillRect(apple.x, apple.y, grid - 1, grid - 1);

      // draw snake one cell at a time and modify color within the length of the snake
      if (snake.maxCells < 19) {
        context.fillStyle = "rgb(192, 96, 161)";
      } else if (snake.maxCells < 34) {
        context.fillStyle = "rgb(106, 9, 125)";
      } else if (snake.maxCells < 49) {
        context.fillStyle = "rgb(202, 184, 19)";
      } else if (snake.maxCells < 64) {
        context.fillStyle = "green";
      } else if (snake.maxCells < 89) {
        context.fillStyle = "red";
      } else {
        context.fillStyle = "black";
      }
      snake.cells.forEach(function (cell, index) {
        // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
        context.fillRect(cell.x, cell.y, grid - 1, grid - 1);

        // snake ate apple
        if (cell.x === apple.x && cell.y === apple.y) {
          snake.maxCells++;
          score++;
          if (score > max) {
            max = score;
            document.getElementById("highscore").innerHTML = max;
            localStorage.setItem("highscoreSnakeAlexisLenoir", max);
          }
          document.getElementById("score").innerHTML = score;

          // canvas is 400x400 which is 25x25 grids
          apple.x = getRandomInt(0, 25) * grid;
          apple.y = getRandomInt(0, 25) * grid;
        }

        // check collision with all cells after this one (modified bubble sort)
        for (var i = index + 1; i < snake.cells.length; i++) {
          // snake occupies same space as a body part. reset game
          if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
            score = 0;
            snake.x = 160;
            snake.y = 160;
            snake.cells = [];
            snake.maxCells = 4;
            snake.dx = grid;
            snake.dy = 0;
            apple.x = getRandomInt(0, 25) * grid;
            apple.y = getRandomInt(0, 25) * grid;
            document.getElementById("score").innerHTML = score;
          }
        }
      });
    }

    if (!isTouchDevice()) {
      // listen to keyboard events to move the snake on DESKTOP
      document.addEventListener("keydown", function (e) {
        // prevent snake from backtracking on itself by checking that it's
        // not already moving on the same axis (pressing left while moving
        // left won't do anything, and pressing right while moving left
        // shouldn't let you collide with your own body)

        if (e.key === "ArrowLeft" && snake.dx === 0) {
          snake.dx = -grid;
          snake.dy = 0;
        } else if (e.key === "ArrowDown" && snake.dy === 0) {
          snake.dx = 0;
          snake.dy = grid;
        } else if (e.key === "ArrowUp" && snake.dy === 0) {
          snake.dx = 0;
          snake.dy = -grid;
        } else if (e.key === "ArrowRight" && snake.dx === 0) {
          snake.dx = grid;
          snake.dy = 0;
        }
      });
    } else {
      const canvasDimension = canvas.getBoundingClientRect();
      const centerCanvas = {
        centerX:
          (canvasDimension.right - canvasDimension.left) / 2 +
          canvasDimension.left,
        centerY:
          (canvasDimension.bottom - canvasDimension.top) / 2 +
          canvasDimension.top,
      };

      // listen to keyboard events to move the snake on MOBILE TABLET
      canvas.addEventListener(
        "touchstart",
        (e) => {
          e.preventDefault();
          const touch = e.touches[0];

          // hit the top part of the canva. Move snake to top
          if (touch.clientY < centerCanvas.centerY && snake.dy === 0) {
            snake.dx = 0;
            snake.dy = -grid;
          }
          // hit the bottom part of the canva. Move snake to bottom
          else if (touch.clientY > centerCanvas.centerY && snake.dy === 0) {
            snake.dx = 0;
            snake.dy = grid;
          }
          // hit the left part of the canva. Move snake to left
          else if (touch.clientX < centerCanvas.centerX && snake.dx === 0) {
            snake.dx = -grid;
            snake.dy = 0;
          }
          // hit the right part of the canva. Move snake to right
          else if (touch.clientX > centerCanvas.centerX && snake.dx === 0) {
            snake.dx = grid;
            snake.dy = 0;
          }
        },
        false
      );
    }

    // start the game
    requestAnimationFrame(loop);
  }
};

export { snakeGame };
