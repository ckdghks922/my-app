import { memo } from 'react';
import * as S from './styled';

interface RouteProps {
  onClick: (url: string) => void;
}
interface IconProps extends RouteProps {
  count: number;
}
const Friend: React.FC<IconProps> = ({ count, onClick }) => {
  return <S.Menu>친구</S.Menu>;
};
export const FriendView = memo(Friend);

const Chat: React.FC<IconProps> = ({ count, onClick }) => {
  return <S.Menu>채팅방</S.Menu>;
};
export const ChatView = memo(Chat);

const Setting: React.FC<RouteProps> = ({ onClick }) => {
  return <S.Menu>설정</S.Menu>;
};
export const SettingView = memo(Setting);
