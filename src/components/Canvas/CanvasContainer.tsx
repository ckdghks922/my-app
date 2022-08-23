import { useState, useEffect, useCallback, useRef } from 'react';
import { WidthView } from './CanvasView';
import * as S from './styled';

let isDrawing = false;

export const CanvasContainer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null | undefined>(
    undefined,
  );
  const [width, setWidth] = useState<string>('1');

  const handleDown = () => {
    isDrawing = true;
  };
  const handleUp = () => {
    isDrawing = false;
    ctx?.beginPath();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 600;
      canvas.height = 600;
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

  const handleChangeWidth = useCallback((value: string): void => {
    setWidth(value);
    if (ctx) ctx.lineWidth = Number(value);
  }, []);

  return (
    <S.Wrapper>
      <S.Canvas
        ref={canvasRef}
        onMouseMove={handleMove}
        onMouseDown={handleDown}
      />
      <S.MenuWrapper>
        <WidthView width={width} onChange={handleChangeWidth} />
      </S.MenuWrapper>
    </S.Wrapper>
  );
};
