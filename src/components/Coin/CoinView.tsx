import { Link } from 'react-router-dom';
import * as S from './styled';

interface CoinItemProps {
  name: string;
  symbol: string;
}
export const CoinItemView: React.FC<CoinItemProps> = ({ name, symbol }) => {
  return (
    <S.CoinWrapper>
      <S.CoinImg
        alt="symbol"
        src={`https://coinicons-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
      />
      <Link to={name}>{name}</Link>
    </S.CoinWrapper>
  );
};
