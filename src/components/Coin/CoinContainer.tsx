import { useQuery } from 'react-query';
import { CoinItemView } from './CoinView';
import { fetchCoins } from '@/utils';
import * as S from './styled';

interface CoinInterface {
  id: string;
  is_active: boolean;
  is_new: boolean;
  name: string;
  rank: number;
  symbol: string;
  type: string;
}
export const CoinContainer: React.FC = () => {
  const { isLoading, data } = useQuery<CoinInterface[]>('allCoins', fetchCoins);

  if (isLoading) return <div>Loading...</div>;

  return (
    <S.Wrapper>
      {data?.slice(0, 50).map(elem => (
        <CoinItemView key={elem.id} id={elem.id} symbol={elem.symbol} />
      ))}
    </S.Wrapper>
  );
};
