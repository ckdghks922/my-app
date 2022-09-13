import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchCoin, fetchCoinTicker } from '@/utils';
import * as S from './styled';

export const CoinItemContainer: React.FC = () => {
  const { coinId } = useParams();

  const { isLoading: isInfoLoading, data: coinInfo } = useQuery(
    ['info', coinId],
    () => fetchCoin(coinId),
  );
  const { isLoading: isTickersLoading, data: tickersInfo } = useQuery(
    ['tickers', coinId],
    () => fetchCoinTicker(coinId),
  );

  if (isInfoLoading || isTickersLoading) return <div>Loading...</div>;

  return (
    <S.Wrapper>
      <S.CoinName>{coinInfo.name}</S.CoinName>
      <S.CoinDesc>{coinInfo.description}</S.CoinDesc>
    </S.Wrapper>
  );
};
