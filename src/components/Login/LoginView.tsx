import { memo } from 'react';
import * as S from './styled';

const Text: React.FC = () => {
  return (
    <S.WelcomeWrapper>
      <S.WelcomeText>Welcome!</S.WelcomeText>
      <S.SubText>사용할 이름을 입력해 주세요.</S.SubText>
    </S.WelcomeWrapper>
  );
};
export const TextView = memo(Text);

interface InputProps {
  name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
export const InputView: React.FC<InputProps> = ({ name, onChange }) => {
  return (
    <>
      <S.Input
        value={name}
        onChange={onChange}
        placeholder="이름을 입력하세요"
      />
      <S.InfoWrapper>
        <S.InfoCircle valid={!!name} />
        <S.InfoText>
          {name
            ? '사용 가능한 이름입니다.'
            : '한 글자 이상의 이름이 필요합니다.'}
        </S.InfoText>
      </S.InfoWrapper>
    </>
  );
};

interface EnterProps {
  onEnter: () => void;
}
const EnterButton: React.FC<EnterProps> = ({ onEnter }) => {
  return (
    <S.ButtonWrapper>
      <S.Button onClick={onEnter}>시작</S.Button>
    </S.ButtonWrapper>
  );
};
export const EnterButtonView = memo(EnterButton);
