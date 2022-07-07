class friendsRepo {
  async fetchFriends() {
    try {
      const res = [
        { id: 1, name: '친구 1' },
        { id: 2, name: '친구 2' },
        { id: 3, name: '친구 3' },
      ];
      return res;
    } catch (e) {
      return [];
    }
  }

  async addFriends() {
    try {
      // api call
    } catch (e) {
      // error handling
    }
  }

  async deleteFriends() {
    try {
      // api call
    } catch (e) {
      // error handling
    }
  }
}

export const friendsRepoImpl = new friendsRepo();
