import { useCallback } from 'react';
import { useNavigate, useResolvedPath, useMatch } from 'react-router-dom';
import { ROUTE_URL } from '@/configs';
import { IconView } from './LeftSideView';
import * as S from './styled';

export const LeftSideContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleRoute = useCallback((url: string): void => {
    navigate(url);
  }, []);

  const NAV_LIST = [
    { name: ROUTE_URL.TODO, count: 1 },
    { name: ROUTE_URL.DRAWING, count: 0 },
  ];

  return (
    <S.Wrapper>
      <S.Menu>
        {NAV_LIST.map(elem => {
          const resolved = useResolvedPath(elem.name);
          const match = !!useMatch({ path: resolved.pathname, end: false });

          return (
            <IconView
              key={elem.name}
              name={elem.name}
              match={match}
              count={elem.count}
              onClick={handleRoute}
            />
          );
        })}
      </S.Menu>
    </S.Wrapper>
  );
};
