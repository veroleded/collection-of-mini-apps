import React, { useState, useEffect, useRef } from 'react';

interface Props {
  brushSize: number;
  color: string;
}

const Canvas = ({ brushSize, color }: Props) => {
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
      console.log(context)
    }
  }, []);

  useEffect(() => {
    if (prevX !== 0 && prevY !== 0) {
      //@ts-ignore
      const canvas = canvasRef.current as HTMLCanvasElement;
      const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
      ctx.strokeStyle = color;
      ctx.lineWidth = brushSize;
      ctx.beginPath();
      ctx.moveTo(prevX, prevY);
      ctx.lineTo(currentX, currentY);
      // ctx.arcTo(currentX, currentY,currentX, currentY, 1)
      ctx.stroke();
    }
  }, [prevX, prevY, currentX, currentY, color, brushSize]);

  const mauseUpHandler = () => {
    setDraw(false);
    setCurrentX(0);
    setCurrentY(0);
    setPrevX(0);
    setPrevY(0);
  };

  const mauseMoveHandler = (e: React.MouseEvent) => {
    if (draw) {
      console.log(prevX, prevY, currentX, currentY)
        setCurrentX(e.clientX);
        setCurrentY(e.clientY);
        setPrevX(currentX);
        setPrevY(currentY);
    }
  };

  return (
    <canvas
      id="canvas"
      ref={canvasRef}
      onMouseDown={() => setDraw(true)}
      onMouseUp={mauseUpHandler}
      className="bg-white w-full h-full min-w-full min-h-full rounded-r-md"
      onMouseMove={mauseMoveHandler}></canvas>
  );
};

export default Canvas;
