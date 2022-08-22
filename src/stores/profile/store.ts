import { makeAutoObservable } from 'mobx';

interface UserProps {
  name: string;
}
export class ProfileStore {
  private _myProfile: UserProps = {
    name: '',
  };

  constructor() {
    makeAutoObservable(this);
  }

  get myProfile() {
    return this._myProfile;
  }

  setMyProfile(name: string) {
    this._myProfile.name = name;
  }
}

export const ProfileStoreImpl = new ProfileStore();
