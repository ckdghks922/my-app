import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MyStoreProvider } from '@/stores';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '@/theme';
import { PAGE_URL } from '@/configs';
import * as Page from '@/pages';
import * as Compt from '@/components';

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <MyStoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path={PAGE_URL.WELCOME} element={<Compt.Login />} />
            <Route path="*" element={<Page.Main />} />
          </Routes>
        </BrowserRouter>
      </MyStoreProvider>
    </ThemeProvider>
  );
};
