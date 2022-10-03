import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MyStoreProvider } from '@/stores';
import { PAGE_URL } from '@/configs';
import * as Page from '@/pages';
import * as Compt from '@/components';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@/globalStyle';
import { lightTheme } from '@/theme';

export const App: React.FC = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <MyStoreProvider>
          <BrowserRouter>
            <Routes>
              <Route path={PAGE_URL.WELCOME} element={<Compt.Login />} />
              <Route path="*" element={<Page.Main />} />
            </Routes>
          </BrowserRouter>
        </MyStoreProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
