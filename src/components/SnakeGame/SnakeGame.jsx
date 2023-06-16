import { useEffect, useState } from "react";

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [
  { x: 3, y: 3 },
  { x: 3, y: 2.5 },
  { x: 3, y: 3 },
];
const INITIAL_DIRECTION = "up";
const INITIAL_APPLE = { x: 3, y: 3 };

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [apple, setApple] = useState(INITIAL_APPLE);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(moveSnake, 100);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, direction, apple]);

  const handleKeyDown = (event) => {
    const key = event.key.toLowerCase();
    if (["arrowup", "arrowdown", "arrowleft", "arrowright"].includes(key)) {
      event.preventDefault();
      setDirection(key.replace("arrow", ""));
    }
  };

  const moveSnake = () => {
    if (gameOver) {
      return;
    }

    const head = { ...snake[0] };
    switch (direction) {
      case "up":
        head.y = (head.y - 1 + GRID_SIZE) % GRID_SIZE;
        break;
      case "down":
        head.y = (head.y + 1) % GRID_SIZE;
        break;
      case "left":
        head.x = (head.x - 1 + GRID_SIZE) % GRID_SIZE;
        break;
      case "right":
        head.x = (head.x + 1) % GRID_SIZE;
        break;
      default:
        break;
    }

    const newSnake = [head, ...snake];
    if (isSnakeCollision(newSnake) || isBoundaryCollision(head)) {
      setGameOver(true);
      return;
    }

    if (head.x === apple.x && head.y === apple.y) {
      setApple(getRandomApplePosition(newSnake));
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  const isSnakeCollision = (newSnake) => {
    const [head, ...body] = newSnake;
    return body.some((part) => part.x === head.x && part.y === head.y);
  };

  const isBoundaryCollision = (head) => {
    return (
      head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE
    );
  };

  const getRandomApplePosition = (newSnake) => {
    const availableCells = Array.from(
      Array(GRID_SIZE * GRID_SIZE).keys()
    ).filter(
      (cell) => !newSnake.some((part) => part.x + part.y * GRID_SIZE === cell)
    );
    const randomCell =
      availableCells[Math.floor(Math.random() * availableCells.length)];
    const x = randomCell % GRID_SIZE;
    const y = Math.floor(randomCell / GRID_SIZE);
    return { x, y };
  };

  const renderCell = (row, col) => {
    const isSnake = snake.some((part) => part.x === col && part.y === row);
    const isApple = apple.x === col && apple.y === row;

    const cellStyle = {
      width: CELL_SIZE,
      height: CELL_SIZE,
      backgroundColor: isSnake ? "#43D9AD" : isApple ? "#FF0000" : "#FFFFFF",
      //   border: "1px solid #000000",
      boxSizing: "border-box",
    };

    return <div key={`${row}-${col}`} style={cellStyle} />;
  };

  const grid = Array.from({ length: GRID_SIZE }, (_, row) =>
    Array.from({ length: GRID_SIZE }, (_, col) => renderCell(row, col))
  );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      {gameOver ? (
        <div>
          <btn className="absolute text-red-500 z-50 bg-yellow-50 top-1/2 right-1/2">
            Game Over!
          </btn>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            backgroundColor: "rgba(1, 22, 39, 0.84)",
            gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
          }}
        >
          {grid}
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
