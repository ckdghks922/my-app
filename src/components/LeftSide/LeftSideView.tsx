import { memo } from 'react';
import { ROUTE_URL } from '@/configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRectangleList as activeList,
  faPenToSquare as activePen,
} from '@fortawesome/free-solid-svg-icons';
import {
  faRectangleList as normalList,
  faPenToSquare as normalPen,
} from '@fortawesome/free-regular-svg-icons';
import * as S from './styled';

interface IconProps {
  name: string;
  match: boolean;
  onClick: (url: string) => void;
  count?: number;
}
const Icon: React.FC<IconProps> = ({ name, match, onClick, count }) => {
  let icon;
  if (name === ROUTE_URL.TODO) icon = match ? activeList : normalList;
  else icon = match ? activePen : normalPen;

  return (
    <S.MenuList>
      <S.IconButton onClick={() => onClick(name)}>
        <FontAwesomeIcon icon={icon} />
        {count !== undefined && count > 0 && <S.Badge>{count}</S.Badge>}
      </S.IconButton>
    </S.MenuList>
  );
};
export const IconView = memo(Icon);
