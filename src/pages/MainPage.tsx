import { Routes, Route } from 'react-router-dom';
import { PAGE_URL } from '../configs';
import * as Compt from '../components';
import * as S from './styled';

export const MainPage: React.FC = () => {
  return (
    <Compt.LoginRoute>
      <>
        <Compt.Header />
        <S.Wrapper>
          <Compt.LeftSide />
          <S.MainSide>
            <Routes>
              <Route path={PAGE_URL.TODO} element={<Compt.Todo />} />
              <Route path={PAGE_URL.DRAWING} element={<Compt.Canvas />} />
              <Route path="*" element={<div>Wrong Path</div>} />
            </Routes>
          </S.MainSide>
        </S.Wrapper>
      </>
    </Compt.LoginRoute>
  );
};
