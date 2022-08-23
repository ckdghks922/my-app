import * as S from './styled';

interface Props {
  width: string;
  onChange: (value: string) => void;
}
export const WidthView: React.FC<Props> = ({ width, onChange }) => {
  return (
    <S.WidthInput
      type="range"
      min="1"
      max="10"
      value={width}
      onChange={event => onChange(event.target.value)}
    />
  );
};
