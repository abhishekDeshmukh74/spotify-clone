import './Player.css';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import Body from '../Body/Body';

function Player({
  getMyCurrentPlaybackState,
  play,
  pause,
  skipToNext,
  skipToPrevious,
  getMyCurrentPlayingTrack,
}) {
  return (
    <div className='player'>
      <div className='player__body'>
        <Sidebar />
        <Body getMyCurrentPlayingTrack={getMyCurrentPlayingTrack} play={play} />
      </div>
      <Footer
        getMyCurrentPlaybackState={getMyCurrentPlaybackState}
        play={play}
        pause={pause}
        skipToNext={skipToNext}
        skipToPrevious={skipToPrevious}
        getMyCurrentPlayingTrack={getMyCurrentPlayingTrack}
      />
    </div>
  );
}

export default Player;
