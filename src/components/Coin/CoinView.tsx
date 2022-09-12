import { Link } from 'react-router-dom';
import * as S from './styled';

interface CoinItemProps {
  name: string;
}
export const CoinItemView: React.FC<CoinItemProps> = ({ name }) => {
  return (
    <S.CoinWrapper>
      <Link to={name}>{name}</Link>
    </S.CoinWrapper>
  );
};
