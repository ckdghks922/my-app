import { memo } from 'react';
import * as S from './styled';

const Text: React.FC = () => {
  return (
    <>
      <S.WelcomeText>Welcome!</S.WelcomeText>
      <S.SubText>사용할 이름을 입력해 주세요.</S.SubText>
    </>
  );
};
export const TextView = memo(Text);

interface InputProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputView: React.FC<InputProps> = ({ name, onChange }) => {
  return (
    <S.Input value={name} onChange={onChange} placeholder="이름을 입력하세요" />
  );
};

interface EnterProps {
  onEnter: () => void;
}
const EnterButton: React.FC<EnterProps> = ({ onEnter }) => {
  return <S.Button onClick={onEnter}>시작</S.Button>;
};
export const EnterButtonView = memo(EnterButton);
