import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTE_URL } from '../../configs';
import { IconView } from './FooterView';
import * as S from './styled';

export const FooterContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleRoute = useCallback((url: string): void => {
    navigate(url);
  }, []);

  const NAV_LIST = [
    { name: ROUTE_URL.FRIENDS, count: 1 },
    { name: ROUTE_URL.CHAT, count: 1 },
    { name: ROUTE_URL.SETTING, count: 0 },
  ];

  return (
    <S.Wrapper>
      {NAV_LIST.map(elem => (
        <IconView
          key={elem.name}
          name={elem.name}
          count={elem.count}
          onClick={handleRoute}
        />
      ))}
    </S.Wrapper>
  );
};
