import { makeAutoObservable } from 'mobx';
import { friendsRepo } from '../../repositories/friends';

interface UserProps {
  name: string;
  message: string;
}
export class friendsStore {
  private _myProfile: UserProps = {
    name: '',
    message: '',
  };
  private _friendsList: UserProps[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  get myProfile() {
    return this._myProfile;
  }

  setMyProfile(name: string, message?: string) {
    if (name) this._myProfile.name = name;
    if (message) this._myProfile.message = message;
  }

  get friendsList() {
    return this._friendsList;
  }

  async fetchFriends(): Promise<void> {
    const res = await friendsRepo.fetchFriends();
  }
}

export const friendsStoreImpl = new friendsStore();
