// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as S from './styled';

interface Props {
  name: string;
}
export const HeaderView: React.FC<Props> = ({ name }) => {
  return (
    <S.Wrapper>
      <S.Text>{name}님, 좋은 하루 보내세요!</S.Text>
      {/* <S.IconButton>
        <FontAwesomeIcon icon={faPlus} />
      </S.IconButton>
      <S.IconButton>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </S.IconButton> */}
    </S.Wrapper>
  );
};
