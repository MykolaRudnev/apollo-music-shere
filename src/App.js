import React, { createContext, useContext, useReducer } from 'react';
import Header from './components/Header';
import AddSong from './components/AddSong';
import SongList from './components/SongList';
import SongPlayer from './components/SongPlayer';
import { Grid, useMediaQuery, Hidden } from '@material-ui/core';
import songReducer from './reducer'

export  const SongContext =  createContext({
    song : {
      id: "d85bde7d-35c7-4c2b-9f24-701242ee1a4b",
      title:"GOOBA - 6ix9ine",
      artist: "6IX9INE",
      thumbnail: "https://i1.sndcdn.com/artworks-5XZOPzuRR4arOyLJ-iPlbHw-t500x500.jpg",
      url: "https://soundcloud.com/scumgang6ix9ine/gooba-6ix9ine",
      duration: 132.336

    },
    isPlaying: false
  })

function App() {
  const iniitalSongState = useContext(SongContext);
  const [state, dispatch] = useReducer(songReducer, iniitalSongState)
  const greaterThenSm =  useMediaQuery(theme => theme.breakpoints.up('sm'));
  const greaterThenMd =  useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <SongContext.Provider value={{state, dispatch}}>
    <Hidden only='xs'>
      <Header />
    </Hidden>
    <Grid container spacing={3}>
      <Grid style={{
        paddingTop: greaterThenSm ? 80 : 10
      }} item xs={12} md={7}>
          <AddSong />
          <SongList />
      </Grid>
      <Grid style={
         greaterThenMd ? {
        position: 'fixed',
        width: '100%',
        right: 0,
        top: 70
      }:{
        position: 'fixed',
        width: '100%',
        left: 0,
        bottom: 0

      }} item xs={12} md={5}>
        <SongPlayer /> 
      </Grid>

   
    </Grid>
    </SongContext.Provider>
  );
}

export default App;
