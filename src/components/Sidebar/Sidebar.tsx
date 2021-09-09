import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import { useStateValue } from '../../StateProvider';
import SidebarOption from '../SidebarOption/SidebarOption';

function Sidebar() {

  const [{ playlists }] = useStateValue();

    return (
      <div className='sidebar'>
        <img
          className='sidebar__logo'
          src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
          alt=''
        />
        <SidebarOption Icon={HomeIcon} title='Home' />
        <SidebarOption Icon={SearchIcon} title='Search' />
        <SidebarOption Icon={LibraryMusicIcon} title='Your Library' />

        <br />
        <SidebarOption Icon={AddIcon} title='Create Playlist' />
        <SidebarOption Icon={FavoriteIcon} title='Liked Songs' />

        <hr />
        <strong className='sidebar__title'>PLAYLISTS</strong>
        {playlists?.items?.map(({ id, name }) => (
          <SidebarOption key={id} title={name} />
        ))}
      </div>
    );
}

export default Sidebar
