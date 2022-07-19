import { memo } from 'react';
import { ROUTE_URL } from '../../configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserLarge,
  faMessage,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import * as S from './styled';

interface IconProps {
  name: string;
  onClick: (url: string) => void;
  count?: number;
}
const Icon: React.FC<IconProps> = ({ name, onClick, count }) => {
  let icon;
  if (name === ROUTE_URL.FRIENDS) icon = faUserLarge;
  else if (name === ROUTE_URL.CHAT) icon = faMessage;
  else icon = faGear;

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
