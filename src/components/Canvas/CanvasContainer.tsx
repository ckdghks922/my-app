import { useState, useEffect, useCallback, useRef } from 'react';
import { WidthView, ColorView, RemoveView, RemoveAllView } from './CanvasView';
import * as S from './styled';

const CANVAS_SIZE = 600;
let isDrawing = false;

export const CanvasContainer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null | undefined>(
    undefined,
  );
  const [width, setWidth] = useState<number>(1);
  const [color, setColor] = useState<string>('');

  const handleDown = () => {
    if (ctx) {
      ctx.beginPath();
      ctx.lineWidth = width;
      ctx.strokeStyle = color;
      ctx.fillStyle = color;
    }
    isDrawing = true;
  };
  const handleUp = () => {
    isDrawing = false;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = CANVAS_SIZE;
      canvas.height = CANVAS_SIZE;
    }
    const ctx = canvas?.getContext('2d');
    setCtx(ctx);

    document.addEventListener('mouseup', handleUp);
    return () => document.removeEventListener('mouseup', handleUp);
  }, []);

  const handleMove = (event: React.MouseEvent) => {
    const { offsetX, offsetY } = event.nativeEvent;
    if (isDrawing) {
      ctx?.lineTo(offsetX, offsetY);
      ctx?.stroke();
      return;
    }
    ctx?.moveTo(offsetX, offsetY);
  };

  const handleChangeWidth = useCallback((value: number): void => {
    setWidth(value);
  }, []);
  const handleChangeColor = useCallback((value: string): void => {
    setColor(value);
  }, []);
  const handleChangeMode = useCallback(() => {
    setColor('white');
  }, []);
  const handleClear = useCallback(() => {
    if (ctx) {
      ctx.fillStyle = 'white';
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    }
  }, [ctx]);

  return (
    <S.Wrapper>
      <S.Canvas
        ref={canvasRef}
        onMouseMove={handleMove}
        onMouseDown={handleDown}
      />
      <S.MenuWrapper>
        <WidthView width={width} onChange={handleChangeWidth} />
        <ColorView onChange={handleChangeColor} />
        <RemoveView onClick={handleChangeMode} />
        <RemoveAllView onClick={handleClear} />
      </S.MenuWrapper>
    </S.Wrapper>
  );
};
