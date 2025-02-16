import { FaPlayCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleItem = ({ image, name, artist, idPath, _id }) => {
    return (

        <Link to={`${idPath}/${_id}`} className='single-item'>
            <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                    <img
                        className='single-item__image'
                        src={image}
                        alt={name}
                    />
                </div>
                <FaPlayCircle className="single-item__icon" />
            </div>

            <div className="single-item__texts">
                <div className="single-item__2lines">
                    <p className="single-item__title">{name}</p>
                    <p className="single-item__type">{artist ?? 'Artista'}</p>
                </div>
            </div>
        </Link>

    )
}

export default SingleItem