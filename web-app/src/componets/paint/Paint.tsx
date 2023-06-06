import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Stage, Layer, Line } from 'react-konva';
import ToolBar from './ToolBar';
import Konva from 'konva';
import { Vector2d } from 'konva/lib/types';

type typeLineState = {
  points: number[];
  strokeWidth?: number | undefined;
  stroke?: string | undefined;
};

const getScaledPoint = (stage: Konva.Stage, scale: number) => {
  console.log(stage);
  const { x, y } = stage.getPointerPosition() as Vector2d;
  return { x: x / scale, y: y / scale };
};

const Paint = (props: { width: number; height: number }) => {
  const stageRef = useRef(null);
  let stage: Konva.Stage;
  const [currentLine, setCurrentLine] = useState<typeLineState | null>(null);
  const [lines, setLines] = useState<typeLineState[]>([]);
  const [color, setColor] = useState('#000000');
  const [brush, setBrush] = useState('brush');
  const [brushSize, setBrushSize] = useState(1);

  useEffect(() => {
    if (stageRef) {
      stage = stageRef.current as unknown as Konva.Stage;
    }
  }, [currentLine, lines, color, brush, brushSize]);

  const onMouseDown = () => {
    const { x, y } = getScaledPoint(stage, 1);
    setCurrentLine({ points: [x, y], strokeWidth: brushSize, stroke: color });
  };

  const onMouseMove = () => {
    if (currentLine) {
      const { x, y } = getScaledPoint(stage, 1);
      switch (brush) {
        case 'brush': {
          setCurrentLine({
            ...currentLine,
            points: [...currentLine.points, x, y],
          });
          break;
        }
        case 'line': {
          const [x0, y0] = currentLine.points;
          setCurrentLine({
            ...currentLine,
            points: [x0, y0, x, y],
          });
          break;
        }
        default: {
          throw new Error('Unknown brush');
        }
      }
    }
  };

  const onMouseUp = () => {
    const { x, y } = getScaledPoint(stage, 1);
    setCurrentLine(null);
    setLines([
      ...lines,
      //@ts-ignore
      { ...currentLine, points: [...currentLine.points, x, y] },
    ]);
  };

  const cleanHandler = () => {
    setLines([]);
    setCurrentLine(null);
  }

  const cancelHandler = () => {
    if(lines.length > 0) {
      const newLines = lines.slice(0, -1);
      setLines(newLines);
    }
  }

  return (
    <div className="flex mt-6 w-max">
      <ToolBar
        color={color}
        setColor={setColor}
        brush={brush}
        setBrush={setBrush}
        brushSize={brushSize}
        setBrushSize={setBrushSize}
        cleanHandler={cleanHandler}
        cancelHandler = {cancelHandler}
      />
      <Stage
        ref={stageRef}
        className="konva-container bg-white shadow-md shadow-orange-800 w-max"
        width={props.width}
        height={props.height}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}>
        <Layer>
          <Line {...currentLine} />
          {lines.map((line, index) => (
            <Line key={index} {...line} />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

Paint.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
};

export default Paint;
