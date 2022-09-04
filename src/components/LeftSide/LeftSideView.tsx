import { memo } from 'react';
import { ROUTE_URL } from '@/configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRectangleList as activeList,
  faPenToSquare as activePen,
  faMoneyBillAlt as activeMoney,
} from '@fortawesome/free-solid-svg-icons';
import {
  faRectangleList as normalList,
  faPenToSquare as normalPen,
  faMoneyBillAlt as normalMoney,
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

  switch (name) {
    case ROUTE_URL.TODO: {
      icon = match ? activeList : normalList;
      break;
    }
    case ROUTE_URL.DRAWING: {
      icon = match ? activePen : normalPen;
      break;
    }
    default: {
      icon = match ? activeMoney : normalMoney;
      break;
    }
  }

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
