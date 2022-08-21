import { makeAutoObservable } from 'mobx';

let id = 0;

interface ItemProps {
  id: number;
  text: string;
  done: boolean;
}
export class TodoStore {
  private _todoList: ItemProps[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get todoList(): ItemProps[] {
    return this._todoList;
  }

  addList(text: string): void {
    const list = { id, text, done: false };
    this._todoList[this._todoList.length] = list;
    id++;
  }

  // updateList(id: number, flag: boolean): void {}

  deleteList(id: number): void {
    const idx = this._todoList.findIndex(elem => elem.id === id);
    if (idx > -1) this._todoList.splice(idx, 1);
  }
}

export const TodoStoreImpl = new TodoStore();
