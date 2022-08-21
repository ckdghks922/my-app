import { createContext, useContext } from 'react';
import { ProfileStoreImpl } from './profile';
import { TodoStoreImpl } from './todo';

export class MyStore {
  profileStore = ProfileStoreImpl;
  todoStore = TodoStoreImpl;
}

const MyStoreInstance = new MyStore();
const MyContext = createContext<MyStore>(MyStoreInstance);

export const MyStoreProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <MyContext.Provider value={MyStoreInstance}>{children}</MyContext.Provider>
);

export const useStore = (): MyStore => useContext(MyContext);
