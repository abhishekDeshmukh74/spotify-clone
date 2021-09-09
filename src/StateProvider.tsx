import { createContext, useContext, useReducer } from 'react';

// interface IContextProps {
//   state: IState;
//   dispatch: ({ type }: { type: string }) => void;
// }

// interface Dispatch {
//     ({ type }: { type: string }): void
// };

export interface IState {
  user: any;
  playlists: any;
  spotify: any;
  discover_weekly: any;
  top_artists: any;
  playing: any;
  item: any;
  token: any
}

export const StateContext = createContext<any>({});

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
