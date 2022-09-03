import { memo } from 'react';
import * as S from './styled';

interface WidthProps {
  width: number;
  onChange: (value: number) => void;
}
const Width: React.FC<WidthProps> = ({ width, onChange }) => {
  return (
    <S.Input
      type="range"
      min={1}
      max={10}
      value={width}
      onChange={event => onChange(Number(event.target.value))}
    />
  );
};
export const WidthView = memo(Width);

interface ColorProps {
  onChange: (value: string) => void;
}
const Color: React.FC<ColorProps> = ({ onChange }) => {
  return (
    <S.Input type="color" onChange={event => onChange(event.target.value)} />
  );
};
export const ColorView = memo(Color);

interface RemoveModeProps extends RemoveProps {
  isErase: boolean;
}
const Remove: React.FC<RemoveModeProps> = ({ onClick, isErase }) => {
  console.log(isErase);
  return (
    <S.Button onClick={onClick}>
      {isErase ? '지우개 모드' : '그리기 모드 '}
    </S.Button>
  );
};
export const RemoveView = memo(Remove);

interface RemoveProps {
  onClick: () => void;
}
const RemoveAll: React.FC<RemoveProps> = ({ onClick }) => {
  return <S.Button onClick={onClick}>모두 지우기</S.Button>;
};
export const RemoveAllView = memo(RemoveAll);
