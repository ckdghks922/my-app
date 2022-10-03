import { useQuery } from 'react-query';
import { CoinTitleView, CoinItemView } from './CoinView';
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

  if (isLoading) return <S.LoadingWrapper>Loading...</S.LoadingWrapper>;

  return (
    <S.Wrapper>
      <CoinTitleView />
      {data?.slice(0, 20).map((elem: CoinInterface) => (
        <CoinItemView key={elem.id} id={elem.id} symbol={elem.symbol} />
      ))}
    </S.Wrapper>
  );
};
