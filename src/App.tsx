import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PAGE_URL } from './configs';
import * as Compt from './components';
import * as S from './styled';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Compt.Header />
      <S.Content>
        <Compt.LeftSide />
        <Routes>
          <Route path={PAGE_URL.WELCOME} element={<Compt.Login />} />
          <Route path={PAGE_URL.FRIENDS} element={<div />} />
          <Route path={PAGE_URL.CHAT} element={<div />} />
          <Route path={PAGE_URL.SETTING} element={<Compt.Canvas />} />
          <Route path="*" element={<div>Wrong Path</div>} />
        </Routes>
      </S.Content>
    </BrowserRouter>
  );
};
