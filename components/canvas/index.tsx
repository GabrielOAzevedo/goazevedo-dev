import { useEffect, useRef } from "react";

export default function Canvas(props) {
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvas.current;
    const context = canvasEl.getContext("2d");

    context.fillStyle = "rgb(200, 200, 200)";
    context.fillRect(
      0,
      0,
      context.canvas.width,
      context.canvas.height
    );
  }, []);

  return <canvas ref={canvas} {...props}></canvas>;
}
