import { FaPlayCircle } from "react-icons/fa";

const SingleItem = () => {
    return (

        <div className='single-item'>
            <div className="single-item__div-image-button">
                <div className="single-item__div-image">
                    <img
                        className='single-item__image'
                        src='https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4'
                        alt='Henrique & Juliano'
                    />
                </div>
                <FaPlayCircle className="single-item__icon" />
            </div>
            <div className="single-item__texts">
                <p className="single-item__title">Henrique & Juliano</p>
                <p className="single-item__type">Artista</p>
            </div>
        </div>

    )
}

export default SingleItem