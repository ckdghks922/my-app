import { useState } from 'react';
import { CoinItemView } from './CoinView';
import * as S from './styled';

interface CoinInterface {
  id: number;
  name: string;
}
export const CoinContainer: React.FC = () => {
  const [coins, setCoins] = useState<CoinInterface[]>([
    {
      id: 1,
      name: '1',
    },
    {
      id: 2,
      name: '1',
    },
  ]);

  return (
    <S.Wrapper>
      {coins.map(elem => (
        <CoinItemView key={elem.id} name={elem.name} />
      ))}
    </S.Wrapper>
  );
};
