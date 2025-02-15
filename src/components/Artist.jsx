import { FaPlayCircle } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"
import { artistArray } from "../../assets/database/artists"
import { songsArray } from "../../assets/database/songs"
import SongsList from "./SongList"
const Artist = () => {

    const { id } = useParams()
    const artist = artistArray.filter((curretArtist) => curretArtist.id == id)[0]

    const songsFromArtistArray = songsArray.filter((currentSong) => currentSong.artist === artist.name)


    return (
        <div className="artist">
            <div className="artist__header" style={{ backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${artist.banner})` }}>

            </div>
            <div className="artist__body">
                <h2>Populares</h2>
                <SongsList songdata={songsFromArtistArray} />
            </div>
            <Link to='/song/1'>
                <FaPlayCircle className="single-item__icon" />
            </Link>
        </div>)
}

export default Artist