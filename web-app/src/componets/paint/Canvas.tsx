import React, { useState, useEffect, useRef } from 'react';

interface Props {
  brushSize: number;
  color: string;
  brush: 'round' | 'square' | 'butt';
}

const Canvas = ({ brushSize, color, brush }: Props) => {
  const [draw, setDraw] = useState(false);
  const [prevX, setPrevX] = useState(0);
  const [prevY, setPrevY] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    //@ts-ignore
    const canvas = canvasRef.current as HTMLCanvasElement;
    const { width, height } = canvas.getBoundingClientRect();

    if (canvas.width !== width || canvas.height !== height) {
      const { devicePixelRatio: ratio = 1 } = window;
      const context = canvas.getContext('2d') as CanvasRenderingContext2D;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      context.scale(ratio, ratio);
      console.log(context);
    }
  }, []);

  useEffect(() => {
    if (prevX !== 0 && prevY !== 0) {
      //@ts-ignore
      const canvas = canvasRef.current as HTMLCanvasElement;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
      ctx.lineWidth = brushSize;
      ctx.lineCap = brush;
      // ctx.strokeRect(currentX, currentY, 2, 3)
      if (draw) {
        ctx.beginPath();
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currentX, currentY);
        // ctx.arc(prevX, prevY,currentX, currentY, 1, true)
        // ctx.roundRect(prevX, prevY,currentX, currentY)
        ctx.stroke();
      }
    }
  }, [prevX, prevY, currentX, currentY, color, brushSize, draw, brush]);

  const mauseUpHandler = () => {
    setDraw(false);
    setCurrentX(0);
    setCurrentY(0);
    setPrevX(0);
    setPrevY(0);
  };

  const mauseMoveHandler = (e: React.MouseEvent) => {
    console.log(prevX, prevY, currentX, currentY);
    setCurrentX(e.clientX);
    setCurrentY(e.clientY);
    setPrevX(currentX);
    setPrevY(currentY);
  };

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      width={1080}
      height={600}
      onMouseDown={() => setDraw(true)}
      onMouseUp={mauseUpHandler}
      className="bg-white w-full h-full min-w-full min-h-full rounded-r-md"
      onMouseMove={mauseMoveHandler}></canvas>
  );
};

export default Canvas;
