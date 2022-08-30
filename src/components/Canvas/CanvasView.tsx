import * as S from './styled';

interface WidthProps {
  width: number;
  onChange: (value: number) => void;
}
export const WidthView: React.FC<WidthProps> = ({ width, onChange }) => {
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

interface ColorProps {
  onChange: (value: string) => void;
}
export const ColorView: React.FC<ColorProps> = ({ onChange }) => {
  return (
    <S.Input type="color" onChange={event => onChange(event.target.value)} />
  );
};

interface RemoveModeProps extends RemoveProps {
  isErase?: boolean;
}
export const RemoveView: React.FC<RemoveModeProps> = ({ onClick, isErase }) => {
  return (
    <S.Button onClick={onClick}>
      {isErase ? '지우개 모드' : '그리기 모드 '}
    </S.Button>
  );
};

interface RemoveProps {
  onClick: () => void;
}
export const RemoveAllView: React.FC<RemoveProps> = ({ onClick }) => {
  return <S.Button onClick={onClick}>모두 지우기</S.Button>;
};
