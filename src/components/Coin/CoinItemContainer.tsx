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
  const { isLoading: isTickerLoading, data: tickerInfo } = useQuery(
    ['tickers', coinId],
    () => fetchCoinTicker(coinId),
  );

  if (isInfoLoading || isTickerLoading)
    return <S.LoadingWrapper>Loading...</S.LoadingWrapper>;

  return (
    <S.Wrapper>
      <S.CoinName>{coinInfo.name}</S.CoinName>
      <S.CoinDesc>{coinInfo.description}</S.CoinDesc>
    </S.Wrapper>
  );
};
