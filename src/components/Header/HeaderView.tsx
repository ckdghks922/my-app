import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as S from './styled';

export const HeaderView: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Text>Welcome to Chat</S.Text>
      <S.IconButton>
        <FontAwesomeIcon icon={faPlus} />
      </S.IconButton>
      <S.IconButton>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </S.IconButton>
    </S.Wrapper>
  );
};
