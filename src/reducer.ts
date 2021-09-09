import { IState } from "./StateProvider";

export const ACTIONS = {
  SET_USER: 'SET_USER',
  SET_PLAYING: 'SET_PLAYING',
  SET_PLAYLISTS: 'SET_PLAYLISTS',
  SET_TOKEN: 'SET_TOKEN',
  SET_DISCOVER_WEEKLY: 'SET_DISCOVER_WEEKLY',
  SET_ITEM: 'SET_ITEM',
  SET_TOP_ARTISTS: 'SET_TOP_ARTISTS',
  SET_SPOTIFY: 'SET_SPOTIFY',
};

export const initialState: IState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case ACTIONS.SET_PLAYING:
      return {
        ...state,
        playing: action.playing,
      };

    case ACTIONS.SET_ITEM:
      return {
        ...state,
        item: action.item,
      };

    case ACTIONS.SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case ACTIONS.SET_TOP_ARTISTS:
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case ACTIONS.SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case ACTIONS.SET_SPOTIFY:
      return {
        ...state,
        spotify: action.spotify,
      };

    case ACTIONS.SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
