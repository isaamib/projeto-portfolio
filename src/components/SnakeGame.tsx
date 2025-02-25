import React, { useState, useEffect, useRef } from "react";
import "../styles/SnakeGame.css";

interface Position {
  x: number;
  y: number;
}

const SnakeGame: React.FC = () => {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<string>("RIGHT");
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [speed, setSpeed] = useState<number>(100);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const generateFood = () => {
    const newFood = {
      x: Math.floor(Math.random() * 20),
      y: Math.floor(Math.random() * 20),
    };
    setFood(newFood);
  };

  const restartGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 5, y: 5 });
    setDirection("RIGHT");
    setGameOver(false);
    setScore(0);
    setSpeed(100);
    setIsPaused(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (isPaused || gameOver) return;

    const gameLoop = setInterval(() => {
      const newSnake = [...snake];
      const head = { ...newSnake[0] };

      switch (direction) {
        case "UP":
          head.y -= 1;
          break;
        case "DOWN":
          head.y += 1;
          break;
        case "LEFT":
          head.x -= 1;
          break;
        case "RIGHT":
          head.x += 1;
          break;
        default:
          break;
      }

      if (head.x < 0 || head.x >= 20 || head.y < 0 || head.y >= 20) {
        setGameOver(true);
        return;
      }

      if (
        newSnake.some((segment) => segment.x === head.x && segment.y === head.y)
      ) {
        setGameOver(true);
        return;
      }

      newSnake.unshift(head);

      if (head.x === food.x && head.y === food.y) {
        generateFood();
        setScore((prevScore) => prevScore + 1);

        if (score % 5 === 0 && speed > 50)
          setSpeed((prevSpeed) => prevSpeed - 5);

        if (score + 1 === 10) {
          setIsPaused(true);
        }
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    }, speed);

    return () => clearInterval(gameLoop);
  }, [snake, direction, gameOver, food, speed, isPaused, score]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "lime";
    snake.forEach((segment) =>
      ctx.fillRect(segment.x * 20, segment.y * 20, 20, 20)
    );

    ctx.fillStyle = "red";
    ctx.fillRect(food.x * 20, food.y * 20, 20, 20);

    ctx.strokeStyle = "white";
    ctx.strokeRect(0, 0, canvas.width, canvas.height);
  }, [snake, food]);

  return (
    <div className="snake-game-container">
      <div className="score">Pontuação: {score}</div>
      <canvas ref={canvasRef} width={400} height={400} />
      {gameOver && (
        <div className="game-over">
          <h2>Game Over!</h2>
          <p>Sua pontuação: {score}</p>
          <button onClick={restartGame}>Jogar Novamente</button>
        </div>
      )}
      {isPaused && (
        <div className="congratulations">
          <h2>Parabéns, agora você é um Python Developer!</h2>
          <button onClick={() => setIsPaused(false)}>Continuar</button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
