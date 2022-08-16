import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MyStoreProvider } from '@/stores';
import { PAGE_URL } from '@/configs';
import { MainPage } from '@/pages';
import * as Compt from '@/components';

export const App: React.FC = () => {
  return (
    <MyStoreProvider>
      <BrowserRouter>
        <Routes>
          <Route path={PAGE_URL.WELCOME} element={<Compt.Login />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </MyStoreProvider>
  );
};
