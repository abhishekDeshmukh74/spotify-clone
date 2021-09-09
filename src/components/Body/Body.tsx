import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import './Body.css';
import Header from '../Header/Header';
import SongRow from '../SongRow/SongRow';
import { ACTIONS } from '../../reducer';
import { useStateValue } from '../../StateProvider';

function Body({ getMyCurrentPlayingTrack, play }) {
  const [{ discover_weekly }, dispatch] = useStateValue();

  async function getCurrentPlayingTrackDetails() {
    const { item } = await getMyCurrentPlayingTrack();
    dispatch({
      type: ACTIONS.SET_ITEM,
      item,
    });
    dispatch({
      type: ACTIONS.SET_PLAYING,
      playing: true,
    });
  }

  const playPlaylist = async (id) => {
    await play({
      context_uri: `spotify:playlist:3i22iqTL6PDtV8MAHERz0i`,
    });

    getCurrentPlayingTrackDetails();
  };

  const playSong = async (id) => {
    await play({
      uris: [`spotify:track:${id}`],
    });

    getCurrentPlayingTrackDetails();
  };

  return (
    <div className='body'>
      <Header />
      <div className='body__info'>
        <img src={discover_weekly?.images[0].url} alt='' />
        <div className='body__infoText'>
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
      <div className='body__songs'>
        <div className='body__icons'>
          <PlayCircleFilledIcon className='body__shuffle' onClick={playPlaylist} />
          <FavoriteIcon fontSize='large' />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map(({ track }) => (
          <SongRow key={track.id} playSong={playSong} track={track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
