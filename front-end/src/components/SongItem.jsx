import { Link } from "react-router-dom"

const SongItem = ({ image, name, artist, index, _id, duration }) => {
    return (
        <Link to={`/song/${_id}`} className="song-item">
            <div className="song-item__number-album">

                <p>{index}</p>
                <div className="song-item__album">

                    <img
                        className="song-item__image"
                        src={image}
                        alt={`imagem da música ${name}`} />
                    <p className="song-item__name">{name}</p>
                </div>
            </div>
            <p className="song-item__name"> {duration}</p>
        </Link>
    )
}
export default SongItem