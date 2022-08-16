import { createContext, useContext } from 'react';
import { chatStoreImpl } from './chat';
import { friendsStoreImpl } from './friends';

export class MyStore {
  chatStore = chatStoreImpl;
  friendsStore = friendsStoreImpl;
}

const MyStoreInstance = new MyStore();
const MyContext = createContext<MyStore>(MyStoreInstance);

export const MyStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <MyContext.Provider value={MyStoreInstance}>{children}</MyContext.Provider>
);

export const useStore = (): MyStore => useContext(MyContext);
