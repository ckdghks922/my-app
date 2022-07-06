import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { FriendView, ChatView, SettingView } from './FooterView';
import * as S from './styled';

export const FooterContainer: React.FC = () => {
  const navigate = useNavigate();

  const handleRoute = useCallback((url: string): void => {
    navigate(url);
  }, []);

  return (
    <S.Wrapper>
      <FriendView count={0} onClick={handleRoute} />
      <ChatView count={0} onClick={handleRoute} />
      <SettingView onClick={handleRoute} />
    </S.Wrapper>
  );
};
