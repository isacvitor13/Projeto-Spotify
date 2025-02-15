import { useState } from "react"
import SongItem from "./SongItem"

const SongList = ({ songdata }) => {
    const [songview, setSongsview] = useState(10)
    
    return (
        <div className="song-list">
            {songdata
                .filter((currentSong, index) => index < songview)
                .map((currentSong, index) => <SongItem key={index} {...currentSong} index />)}
            <p onClick={() => setSongsview(songview + 5)} className="song-list__see-more">Ver mais</p>
        </div>
    )
}
export default SongList