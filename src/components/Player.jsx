import { FaPlayCircle } from "react-icons/fa"
import { FaStepBackward } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { Link } from "react-router-dom";
const Player = ({ duration ,randomIdFromArtist,randomId2FromArtist}) => {
    return (
        <div className="player">

            <div className="player__controllers">
                <Link to={`/song/${randomId2FromArtist}`}>
                    <FaStepBackward className="player__icon" />
                </Link>
                <FaPlayCircle className="player__icon" />
                <Link to={`/song/${randomIdFromArtist}`}>
                    <FaStepForward className="player__icon" />
                </Link>
            </div>
            <div className="player__progress">
                <p>00:00</p>
                <div className="player__bar">

                    <div className="player__bar-progress"></div>
                </div>
                <p>{duration}</p>
            </div>
        </div>
    )
}
export default Player