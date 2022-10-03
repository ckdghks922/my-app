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
    const hour = date.getHours();

    const isAM = hour < 12;
    const hours =
      hour < 13
        ? hour.toString().padStart(2, '0')
        : (hour - 12).toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return { isAM, hours, minutes, seconds };
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
