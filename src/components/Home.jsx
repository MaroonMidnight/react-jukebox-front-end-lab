import TrackList from "./TrackList"
import NowPlaying from "./NowPlaying"

function Home({selectedTrack, tracks, setSelectedTrack}) {
    
    return(
        <>
            <a href ='/add-track'><button>Add New Track</button></a>
            <TrackList trackList={tracks} setSelectedTrack={setSelectedTrack} />
            <NowPlaying selectedTrack={selectedTrack}/>
        </>
    )
}

export default Home