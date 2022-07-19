import { useEffect, useRef } from 'react';
import * as S from './styled';

export const CanvasContainer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = 500;
      canvas.height = 500;
    }

    const ctx = canvas?.getContext('2d');
    if (ctx) {
      ctx.fillRect(50, 100, 50, 100);
      ctx.fillRect(200, 100, 50, 100);
      ctx.fillRect(125, 150, 50, 50);

      ctx.moveTo(50, 100);
      ctx.lineTo(150, 50);
      ctx.lineTo(250, 100);
      ctx.fill();

      ctx.beginPath();
      ctx.arc(300, 300, 50, 0, 2 * Math.PI);
      ctx.fill();
    }
  }, []);

  return (
    <S.Wrapper>
      <S.Canvas ref={canvasRef} />
    </S.Wrapper>
  );
};
