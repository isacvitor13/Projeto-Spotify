import { FaPlayCircle } from "react-icons/fa"
import { Link, useParams } from "react-router-dom"
import { artistArray } from "../../assets/database/artists"
import { songsArray } from "../../assets/database/songs"
import SongsList from "../components/SongList"
const Artist = () => {

    const { id } = useParams()
    const {name,banner} = artistArray.filter((curretArtist) => curretArtist._id == id)[0]

    const songsFromArtistArray = songsArray.filter((currentSong) => currentSong.artist === name)

    const randomIndex = Math.floor(Math.random() * (songsFromArtistArray.length - 1))

    const randomIdFromArtist = songsFromArtistArray[randomIndex]._id
    
    return (
        <div className="artist">
            <div className="artist__header" style={{ backgroundImage: `linear-gradient(to bottom, var(--_shade), var(--_shade)),url(${banner})` }}>

            </div>
            <div className="artist__body">
                <h2>Populares</h2>
                <SongsList songdata={songsFromArtistArray} />
            </div>
            <Link to={`/song/${randomIdFromArtist}`}>
                <FaPlayCircle className="single-item__icon single-item__icon--artist" />
            </Link>
        </div>
        )
}

export default Artist