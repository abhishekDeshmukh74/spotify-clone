export const authEndpoint = 'https://accounts.spotify.com/authorize';

const clientId = '4cdd882e03b44de8a474d74e65650b23';

const redirectUri = 'http://localhost:3000/';

const scopes = [
  'user-read-currently-playing',
  'user-read-recently-played',
  'user-read-playback-state',
  'user-top-read',
  'user-modify-playback-state',
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce((initial: any, item) => {
      const [key, value] = item.split('=');
      initial[key] = decodeURIComponent(value);
      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
