import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '@/stores';
import { ROUTE_URL } from '@/configs';

interface Props {
  children: React.ReactElement;
}
export const LoginRoute: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const {
    friendsStore: { myProfile },
  } = useStore();

  useEffect(() => {
    if (!myProfile.name) navigate(ROUTE_URL.WELCOME);
  }, []);

  if (myProfile.name) return <>{children}</>;

  return null;
};
