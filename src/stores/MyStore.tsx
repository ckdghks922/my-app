import { createContext, useContext } from 'react';
import { profileStoreImpl } from './profile';

export class MyStore {
  profileStore = profileStoreImpl;
}

const MyStoreInstance = new MyStore();
const MyContext = createContext<MyStore>(MyStoreInstance);

export const MyStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <MyContext.Provider value={MyStoreInstance}>{children}</MyContext.Provider>
);

export const useStore = (): MyStore => useContext(MyContext);
