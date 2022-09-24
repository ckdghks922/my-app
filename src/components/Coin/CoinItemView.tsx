import * as S from './styled';

interface DescProps {
  name: string;
  description: string;
}
export const ItemDescView: React.FC<DescProps> = ({ name, description }) => {
  return (
    <>
      <S.CoinName>{name}</S.CoinName>
      <S.CoinDesc>{description}</S.CoinDesc>
    </>
  );
};
