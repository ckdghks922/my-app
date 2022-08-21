import { makeAutoObservable } from 'mobx';

let id = 0;

interface ItemProps {
  id: number;
  text: string;
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
    const list = { id, text };
    this._todoList[this._todoList.length] = list;
    id++;
  }

  deleteList(id: number): void {
    const index = this._todoList.findIndex(elem => {
      elem.id === id;
    });
    if (index > -1) this._todoList = this._todoList.splice(index, 1);
  }
}

export const TodoStoreImpl = new TodoStore();
