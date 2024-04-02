import { createContext } from "react";
import reducer, { initialState } from "./Reducers";


type InitialState =  {
    token: null|string,
    userInfo: null|string,
    playlists: [],
    currentPlaying: null|string,
    playerState: boolean,
    selectedPlaylist: null|string,
    selectedPlaylistId: string,
}


type ReducerCases = {
    SET_TOKEN: string;
    SET_USER: string;
    SET_PLAYLISTS: string;
    SET_PLAYING: string;
    SET_PLAYER_STATE: string;
    SET_PLAYLIST: string;
    SET_PLAYLIST_ID: string;
   
  };

  interface Track {
    id: string;
    name: string;
    artists: string; 
    image: string;
    duration: number;
    album: string[];
    context_uri: string;
    track_number: string;
  }


  
type selectedplaylist = {
    id: string,
    name: string,
    description: string
    image:string
     tracks: Track[]
  };


 
  type actiontypes =
  | { type: ReducerCases["SET_TOKEN"]; token: string }
  | { type: ReducerCases['SET_USER']; userInfo: string }
  | { type: ReducerCases['SET_PLAYLISTS']; playlists: string }
  | { type: ReducerCases['SET_PLAYING']; currentPlaying: Track }
  | { type: ReducerCases['SET_PLAYER_STATE']; playerState: boolean }
  | { type: ReducerCases['SET_PLAYLIST']; selectedPlaylist: selectedplaylist }
  | { type: ReducerCases['SET_PLAYLIST_ID']; selectedPlaylistId: string };


// type reducertype =(state: InitialState, action: actiontypes) => {
     
// }

type reducertype = (state: InitialState, action: actiontypes) => InitialState;



type createContextType = {
    initialStatetype: InitialState 
    // reducer: reducertype
    dispatch: React.Dispatch<actiontypes>;
}



export const  StateContext = createContext<createContextType>(null!);