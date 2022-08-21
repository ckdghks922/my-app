import { useStore } from '@/stores';
import { HeaderView } from './HeaderView';

export const HeaderContainer: React.FC = () => {
  const {
    profileStore: { myProfile },
  } = useStore();

  return <HeaderView name={myProfile.name} />;
};
