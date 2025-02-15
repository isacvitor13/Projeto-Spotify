import { FaPlayCircle } from "react-icons/fa"
import { FaStepBackward } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
const Player = ({duration}) => {
    return (
        <div className="player">

            <div className="player__controllers">
                <FaStepBackward className="player__icon" />
                <FaPlayCircle className="player__icon" />
                <FaStepForward className="player__icon" />
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