import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextView, InputView, EnterButtonView } from './LoginView';
import { ROUTE_URL } from '@/configs';
import * as S from './styled';

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>('');

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setName(e.target.value);
    },
    [],
  );
  const handleEnter = useCallback((): void => {
    if (!name) return;
    navigate(ROUTE_URL.FRIENDS);
  }, []);

  return (
    <S.Wrapper>
      <TextView />
      <InputView name={name} onChange={handleChangeName} />
      <EnterButtonView onEnter={handleEnter} />
    </S.Wrapper>
  );
};
