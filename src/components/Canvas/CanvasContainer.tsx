import { useState, useEffect, useRef } from 'react';
import * as S from './styled';

let isDrawing = false;

export const CanvasContainer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null | undefined>(
    undefined,
  );

  const handleMove = (event: React.MouseEvent) => {
    const { offsetX, offsetY } = event.nativeEvent;
    if (isDrawing) {
      ctx?.lineTo(offsetX, offsetY);
      ctx?.stroke();
      return;
    }
    ctx?.moveTo(offsetX, offsetY);
  };

  const handleDown = () => {
    isDrawing = true;
  };
  const handleUp = () => {
    isDrawing = false;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 600;
      canvas.height = 600;
    }
    const ctx = canvas?.getContext('2d');
    setCtx(ctx);
  }, []);

  return (
    <S.Wrapper>
      <S.Canvas
        ref={canvasRef}
        onMouseMove={handleMove}
        onMouseDown={handleDown}
        onMouseUp={handleUp}
      />
    </S.Wrapper>
  );
};
