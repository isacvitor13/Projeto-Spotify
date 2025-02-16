import { Link, useParams } from "react-router-dom"
import Player from "../components/Player"
import { songsArray } from "../../assets/database/songs"
import { artistArray } from "../../assets/database/artists"
const Song = () => {

    const { id } = useParams()
    const { image, name, artist, duration, audio } = songsArray.filter((currentSongObj) => currentSongObj._id == id)[0]
    const artistObj = artistArray.filter((currentArtistObj) => currentArtistObj.name === artist)[0]

    const songsArrayFromArtista = songsArray.filter((currenntSong) => currenntSong.artist === artist)

    const randoIndex = Math.floor(Math.random() * (songsArrayFromArtista.length - 1))
    const randoIndex2 = Math.floor(Math.random() * (songsArrayFromArtista.length - 1))
    const randomSongFromArtist = songsArrayFromArtista[randoIndex]._id
    const randomSongFromArtist2 = songsArrayFromArtista[randoIndex2]._id


    return (
        <div className="song">
            <div className="song__container">
                <img

                    src={image}
                    alt={`capa da música ${name}`}
                />
            </div>

            <div className="song__bar">
                <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
                    <img
                        width={75}
                        height={75}
                        src={artistObj.image}
                        alt="imagem do artista Y"
                    />

                </Link>
                <Player duration={duration} randomIdFromArtist={randomSongFromArtist} randomId2FromArtist={randomSongFromArtist2} audio={audio} />
                <div>
                    <p className="song__name">{name}</p>
                    <p>{artist}</p>
                </div>
            </div>
        </div>
    )
}

export default Song