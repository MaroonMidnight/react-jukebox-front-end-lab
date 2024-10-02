export default function NowPlaying({selectedTrack}){

    return(
        
    <>
        { selectedTrack ? 
        <>
        <h3>Now Playing</h3>
        <ul>
            <li>
                Title: {selectedTrack?.title}
            </li>
            <li>
                Artist: {selectedTrack?.artist}
            </li>
        </ul>
        </>
        : 
        <>
        </>
        }
    </>
    )
}