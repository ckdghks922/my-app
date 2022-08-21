import { memo } from 'react';
import * as S from './styled';

interface TextProps {
  name: string;
}
const HeaderText: React.FC<TextProps> = ({ name }) => {
  return <S.Text>{name}님, 좋은 하루 보내세요!</S.Text>;
};
export const HeaderTextView = memo(HeaderText);

interface TimeProps {
  time: {
    hours: string;
    minutes: string;
    seconds: string;
  };
}
export const TimeTextView: React.FC<TimeProps> = ({ time }) => {
  return (
    <S.Time>
      현재 시각: {time.hours}:{time.minutes}:{time.seconds}
    </S.Time>
  );
};
