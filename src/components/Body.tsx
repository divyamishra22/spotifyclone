import React, { useEffect } from 'react'
import { reducerCases } from '../contextapi/Constants.tsx';
import { useStateProvider } from '../contextapi/Stateprovider.tsx';
import axios from 'axios';
import { initialState } from '../contextapi/Reducers.ts';

export const Body = () => {
     const {initialStatetype,dispatch}  = useStateProvider();
     const{token, selectedPlaylistId} = initialStatetype;

    useEffect(()=>{

        const getInitialPlaylist = async () => {
            const response = await axios.get(
              `https://api.spotify.com/v1/playlists/${selectedPlaylistId}`,
              {
                headers: {
                  Authorization: "Bearer " + token,
                  "Content-Type": "application/json",
                },
              }
            );
            const selectedplay = {
              id: response.data.id,
              name: response.data.name,
              description: response.data.description.startsWith("<a")
                ? ""
                : response.data.description,
              image: response.data.images[0].url,
              tracks: response.data.tracks.items.map(({ track }) => ({
                id: track.id,
                name: track.name,
                artists: track.artists.map((artist) => artist.name),
                image: track.album.images[2].url,
                duration: track.duration_ms,
                album: track.album.name,
                context_uri: track.album.uri,
                track_number: track.track_number,
              })),

            };
            dispatch({type: reducerCases.SET_PLAYLIST, selectedPlaylist:selectedplay});
          };
          getInitialPlaylist();
        }, [token, 
             dispatch, 
            selectedPlaylistId]);


            const playTrack = async() =>{

            }

    
  return (
   
    <div>Body</div>
 
  )
}
