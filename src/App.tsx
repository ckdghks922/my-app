import { Routes, Route, BrowserRouter } from 'react-router-dom';
import * as Compt from './components';
import * as S from './styled';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Compt.Header />
      <S.Content>
        <Routes>
          <Route path="/" element={<Compt.Login />} />
          <Route path="/" element={<div />} />
          <Route path="/" element={<div />} />
        </Routes>
      </S.Content>
    </BrowserRouter>
  );
};
