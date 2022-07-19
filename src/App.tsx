import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PAGE_URL } from './configs';
import { MainPage } from './pages';
import * as Compt from './components';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PAGE_URL.WELCOME} element={<Compt.Login />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};
