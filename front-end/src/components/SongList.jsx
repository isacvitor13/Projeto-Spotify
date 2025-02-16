import { useState } from "react"
import SongItem from "./SongItem"

const SongList = ({ songdata }) => {
    const [items, setItems] = useState(5)
    
    return (
        <div className="song-list">
            {songdata
                .filter((currentSong, index) => index < items)
                .map((currentSong, index) => <SongItem key={index} {...currentSong} index />)}

            <p onClick={() =>{ setItems(items + 5)
                console.log(items)
            }} className="song-list__see-more">Ver mais</p>
        </div>
    )
}
export default SongList