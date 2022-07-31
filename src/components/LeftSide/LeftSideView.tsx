import { memo } from 'react';
import { ROUTE_URL } from '../../configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserLarge,
  faMessage,
  faPencil,
} from '@fortawesome/free-solid-svg-icons';
import * as S from './styled';

interface IconProps {
  name: string;
  match: boolean;
  onClick: (url: string) => void;
  count?: number;
}
const Icon: React.FC<IconProps> = ({ name, match, onClick, count }) => {
  let icon;
  if (name === ROUTE_URL.FRIENDS) icon = match ? faUserLarge : faUserLarge;
  else if (name === ROUTE_URL.CHAT) icon = match ? faMessage : faMessage;
  else icon = match ? faPencil : faPencil;

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
