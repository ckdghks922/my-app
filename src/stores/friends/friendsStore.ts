import { makeAutoObservable, runInAction } from 'mobx';
import { friendsRepo } from '../../repositories/friends';

export class friendsStore {
  private _friendsList = [];

  constructor() {
    makeAutoObservable(this);
  }

  get friendsList() {
    return this._friendsList;
  }

  async fetchFriends(): Promise<void> {
    const res = await friendsRepo.fetchFriends();
  }
}

export const friendsStoreImpl = new friendsStore();
