export class friendsModel {
  name: string;
  isFav: boolean;

  constructor(USER_NAME: string, USER_FAV: boolean) {
    this.name = USER_NAME;
    this.isFav = USER_FAV;
  }
}
