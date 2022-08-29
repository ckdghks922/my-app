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
