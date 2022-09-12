import { Routes, Route } from 'react-router-dom';
import * as Compt from '@/components';

export const CoinPage: React.FC = () => {
  return (
    <Routes>
      <Route index element={<Compt.Coin />} />
      <Route path=":coinId" element={<Compt.CoinItem />} />
    </Routes>
  );
};
