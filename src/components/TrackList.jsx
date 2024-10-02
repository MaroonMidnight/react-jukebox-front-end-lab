export default function TrackList(props){
    const trackJsx = props.trackList.map((track) => {
        return (
            <ul key={track._id}>
                <li>
                    {track.title}
                    {track.artist}
                    <button onClick={() => props.setSelectedTrack(track)}>Play</button>
                </li>
            </ul>
        )
    })

    return(
        <>
        <h1>Track List</h1>
        <ul>
            {trackJsx}
        </ul>
        </>
    )



}