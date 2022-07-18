import { useEffect, useRef } from 'react';
import * as S from './styled';

export const CanvasContainer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    ctx?.fillRect(50, 50, 50, 50);
  }, []);

  return (
    <S.Wrapper>
      <S.Canvas ref={canvasRef} />
    </S.Wrapper>
  );
};
