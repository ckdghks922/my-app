import { memo } from 'react';
import { ROUTE_URL } from '@/configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import * as S from './styled';

interface IconProps {
  name: string;
  match: boolean;
  onClick: (url: string) => void;
  count?: number;
}
const Icon: React.FC<IconProps> = ({ name, match, onClick, count }) => {
  const icon = match ? faPencil : faPencil;

  return (
    <S.Menu>
      <S.IconButton onClick={() => onClick(name)}>
        <FontAwesomeIcon icon={icon} />
        {count !== undefined && count > 0 && <S.Badge>{count}</S.Badge>}
      </S.IconButton>
    </S.Menu>
  );
};
export const IconView = memo(Icon);
