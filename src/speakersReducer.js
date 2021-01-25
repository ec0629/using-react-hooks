function speakersReducer(state, action) {
  function updateFavorite(favoriteValue) {
    const newState = state.map((item) => {
      if (item.id === action.sessionId) {
        return { ...item, favorite: favoriteValue };
      }
      return item;
    });

    return newState;
  }

  switch (action.type) {
    // load data after receiving from server
    case "setSpeakerList": {
      return action.data;
    }
    // update heart to favorite
    case "favorite": {
      return updateFavorite(true);
    }
    case "unfavorite": {
      return updateFavorite(false);
    }
    default:
      return state;
  }
}

export default speakersReducer;
