function speakersReducer(state, action) {
  function updateFavorite(favoriteValue) {
    return state.speakerList.map((item) => {
      if (item.id === action.id) {
        return { ...item, favorite: favoriteValue };
      }
      return item;
    });
  }

  switch (action.type) {
    // load data after receiving from server
    case "setSpeakerList": {
      return { ...state, speakerList: action.data, isLoading: false };
    }
    // update heart to favorite
    case "favorite": {
      return { ...state, speakerList: updateFavorite(true) };
    }
    case "unfavorite": {
      return { ...state, speakerList: updateFavorite(false) };
    }
    default:
      return state;
  }
}

export default speakersReducer;
