import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PAGE_URL } from './configs';
import * as Compt from './components';
import * as S from './styled';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Compt.Header />
      <S.Wrapper>
        <Compt.LeftSide />
        <S.MainSide>
          <Routes>
            <Route path={PAGE_URL.WELCOME} element={<Compt.Login />} />
            <Route path={PAGE_URL.FRIENDS} element={<Compt.Friends />} />
            <Route path={PAGE_URL.CHAT} element={<div />} />
            <Route path={PAGE_URL.DRAWING} element={<Compt.Canvas />} />
            <Route path="*" element={<div>Wrong Path</div>} />
          </Routes>
        </S.MainSide>
      </S.Wrapper>
    </BrowserRouter>
  );
};
