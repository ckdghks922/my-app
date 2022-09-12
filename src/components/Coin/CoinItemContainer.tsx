import { useParams } from 'react-router-dom';

export const CoinItemContainer: React.FC = () => {
  const { coinId } = useParams();

  return <div>{coinId}</div>;
};
