import { useEffect } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';

import './App.css';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import { ACTIONS } from './reducer';
import { getTokenFromResponse } from './spotify';
import { useStateValue } from './StateProvider';

const {
  setAccessToken,
  getMe,
  getUserPlaylists,
  play,
  pause,
  getMyCurrentPlaybackState,
  skipToNext,
  skipToPrevious,
  getMyCurrentPlayingTrack,
  getPlaylist,
  getMyTopArtists,
} = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const { access_token } = getTokenFromResponse();
    window.location.hash = '';
    if (access_token) {
      dispatch({ type: ACTIONS.SET_TOKEN, token: access_token });
      setAccessToken(access_token);
      getUserDetails();
      getPlaylistDetails();
      getTopArtistsDetails();
      getMyTopArtistsDetails();
    }

    async function getUserDetails() {
      const user = await getMe();
      dispatch({ type: ACTIONS.SET_USER, user });
    }

    async function getPlaylistDetails() {
      const playlists = await getUserPlaylists();
      dispatch({ type: ACTIONS.SET_PLAYLISTS, playlists });
    }

    async function getTopArtistsDetails() {
      const response = await getPlaylist('7KHrowvhxZxsKIcJsGpuQq');
      dispatch({
        type: ACTIONS.SET_DISCOVER_WEEKLY,
        discover_weekly: response,
      });
    }

    async function getMyTopArtistsDetails() {
      const response = await getMyTopArtists();
      dispatch({
        type: ACTIONS.SET_TOP_ARTISTS,
        top_artists: response,
      });
    }
  }, [dispatch]);

  return (
    <div className='app'>
      {!token ? (
        <Login />
      ) : (
        <Player
          getMyCurrentPlaybackState={getMyCurrentPlaybackState}
          play={play}
          pause={pause}
          skipToNext={skipToNext}
          skipToPrevious={skipToPrevious}
          getMyCurrentPlayingTrack={getMyCurrentPlayingTrack}
        />
      )}
    </div>
  );
}

export default App;
