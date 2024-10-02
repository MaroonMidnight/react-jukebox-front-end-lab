// src/App.jsx
import { useState, useEffect } from "react";
import {Routes, Route} from "react-router-dom"
import * as trackService from './services/trackService'
import Home from "./components/Home";
import TrackForm from "./components/TrackForm";

const App = () => {
  const [tracks, setTracks] = useState([])
  const [selectedTrack, setSelectedTrack] = useState(null)

  useEffect(() => {

    async function getTracks(){

      try {
        const tracks = await trackService.index()
        console.log(tracks, '<- tracks from express server')
        setTracks(tracks)
      } catch(err) {
        console.log(err)
      }
    }

    getTracks()
  }, [])

  async function handleAddTrack(dataFromTheForm) {
      try{
        const newTrack = await trackService.create(dataFromTheForm)
        console.log(newTrack, '<- response from server')
        setTracks([newTrack, ...tracks])
      } catch(err) {
        console.log(err, '<- err in handleAddTrack')
      }
  }


  return (
    <>
      <Routes>
        <Route path='/' element={<Home tracks={tracks} selectedTrack={selectedTrack} setSelectedTrack={setSelectedTrack} />}/>
        <Route path='/add-track' element={<TrackForm  handleAddTrack={handleAddTrack} />}/>
      </Routes>
      
    </>
  )
};

export default App;
