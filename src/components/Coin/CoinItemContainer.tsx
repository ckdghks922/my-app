import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { fetchCoin } from '@/utils';
import { ItemDescView } from './CoinItemView';
import { Chart } from './Chart';
import * as S from './styled';

export const CoinItemContainer: React.FC = () => {
  const { coinId } = useParams();

  const { isLoading: isInfoLoading, data: coinInfo } = useQuery(
    ['info', coinId],
    () => fetchCoin(coinId),
  );

  if (isInfoLoading) return <S.LoadingWrapper>Loading...</S.LoadingWrapper>;

  return (
    <S.Wrapper>
      <ItemDescView name={coinInfo.name} description={coinInfo.description} />
      <Chart coinId={coinId} />
    </S.Wrapper>
  );
};
