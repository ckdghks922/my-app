import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/stores';
import { ROUTE_URL } from '@/configs';
import { TextView, InputView } from './LoginView';
import * as S from './styled';

export const LoginContainer: React.FC = () => {
  const navigate = useNavigate();
  const { profileStore } = useStore();
  const [name, setName] = useState<string>('');

  const handleChangeName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setName(e.target.value);
    },
    [],
  );
  const handleEnter = (): void => {
    if (!name) return;

    profileStore.setMyProfile(name);
    navigate(ROUTE_URL.TODO);
  };

  return (
    <S.Wrapper>
      <TextView />
      <InputView
        name={name}
        onChange={handleChangeName}
        onEnter={handleEnter}
      />
    </S.Wrapper>
  );
};
