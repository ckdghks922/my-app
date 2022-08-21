import { useState, useEffect, useCallback } from 'react';
import { useStore } from '@/stores';
import { HeaderTextView, TimeTextView } from './HeaderView';
import * as S from './styled';

export const HeaderContainer: React.FC = () => {
  const {
    profileStore: { myProfile },
  } = useStore();

  const handleTimer = useCallback(() => {
    const date = new Date();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return { hours, minutes, seconds };
  }, []);

  const [time, setTime] = useState(handleTimer());

  useEffect(() => {
    const timer = setInterval(() => {
      const res = handleTimer();
      setTime(res);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <S.Wrapper>
      <HeaderTextView name={myProfile.name} />
      <TimeTextView time={time} />
    </S.Wrapper>
  );
};
