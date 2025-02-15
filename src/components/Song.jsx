import { Link, useParams } from "react-router-dom"
import Player from "./Player"
import { songsArray } from "../../assets/database/songs"
import { artistArray } from "../../assets/database/artists"
const Song = () => {

const {id}=useParams()
const {image,name,artist,duration,audio}= songsArray.filter((currentSongObj)=>currentSongObj.id==id)[0] 
const artistObj= artistArray.filter((currentArtistObj)=>currentArtistObj.name===artist)[0]




    return (
        <div className="song">
            <div className="song__container">
                <img

                    src={image}
                    alt={`capa da música ${name}`}
                />
            </div>

            <div className="song__bar">
                <Link to={`/artist/${artistObj.id}`} className="song__artist-image">
                    <img
                        width={75}
                        height={75}
                        src={artistObj.image}
                        alt="imagem do artista Y"
                    />

                </Link>
                <Player duration={duration}  />
                <div>
                    <p className="song__name">{name}</p>
                    <p>{artist}</p>
                </div>
            </div>
        </div>
    )
}

export default Song