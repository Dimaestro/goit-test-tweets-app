export const getFilteredFollows = (follows, data, status, statusFilter) => {

    const resultFollowing = data.filter(user => {
      return follows.some(item => item === user.id);
    });

    const resultFollow = data.filter(user => {
      return !(follows.some(item => item === user.id));
    })

    switch (status) {
      case statusFilter.followings:
        return resultFollowing;
      case statusFilter.follow:
        return resultFollow;
      default:
        return data;
    }
  };