import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import * as S from './styled';

export const HeaderView: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Text>Chat Example</S.Text>
      <FontAwesomeIcon icon={faPlus} />
      <FontAwesomeIcon icon={faMagnifyingGlass} />
    </S.Wrapper>
  );
};
