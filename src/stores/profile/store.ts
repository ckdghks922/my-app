import { makeAutoObservable } from 'mobx';

interface UserProps {
  name: string;
  message: string;
}
export class profileStore {
  private _myProfile: UserProps = {
    name: '',
    message: '',
  };

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
}

export const profileStoreImpl = new profileStore();
