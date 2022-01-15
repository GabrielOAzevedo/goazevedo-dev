import { useEffect, useRef } from "react";

export default function Canvas({ drawFunction, ...otherProps }: ICanvasProps) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const frame = useRef<number>(null);

  useEffect(() => {
    const canvasEl = canvas.current;
    const context = canvasEl.getContext("2d");

    if (drawFunction) {
      const draw = () => {
        drawFunction(context);
        frame.current = requestAnimationFrame(draw);
      };
      draw();
    } else {
      context.fillStyle = "rgb(200, 200, 200)";
      context.fillRect(0, 0, context.canvas.width, context.canvas.height);
    }

    return () => {
      frame.current !== null && cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <canvas ref={canvas} {...otherProps}></canvas>
    </div>
  );
}

interface ICanvasProps extends React.HTMLProps<HTMLCanvasElement> {
  drawFunction?: (ctx: CanvasRenderingContext2D) => void;
}
