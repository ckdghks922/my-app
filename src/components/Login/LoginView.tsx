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
  onEnter: () => void;
}
export const InputView: React.FC<InputProps> = ({
  name,
  onChange,
  onEnter,
}) => {
  return (
    <>
      <S.Input
        value={name}
        placeholder="이름을 입력하세요"
        onChange={onChange}
        onKeyDown={event => {
          if (event.key === 'Enter') onEnter();
        }}
      />
      <S.InfoWrapper>
        <S.InfoCircle valid={!!name} />
        <S.InfoText>
          {name
            ? '사용 가능한 이름입니다.'
            : '한 글자 이상의 이름이 필요합니다.'}
        </S.InfoText>
      </S.InfoWrapper>
      <S.ButtonWrapper>
        <S.Button onClick={onEnter}>시작</S.Button>
      </S.ButtonWrapper>
    </>
  );
};
