import { useEffect, useRef, useState } from "react";
import { FaPlayCircle } from "react-icons/fa"
import { FaPauseCircle } from "react-icons/fa"
import { FaStepBackward } from "react-icons/fa";
import { FaStepForward } from "react-icons/fa";
import { Link } from "react-router-dom";

const formatTime = (timesInSeconds) => {
    const minutes = Math.floor(timesInSeconds / 60).toString().padStart(2, '0')
    const seconds = Math.floor(timesInSeconds - (minutes * 60)).toString().padStart(2, '0')
    return (`${minutes}:${seconds}`)
}

const timesInSeconds = (timeString) => {
    const splitArray = timeString.split(':')
    const minutes = Number(splitArray[0])
    const seconds = Number(splitArray[1])
    return seconds + minutes * 60
}


const Player = ({ duration, randomIdFromArtist, randomId2FromArtist, audio }) => {
    const audioPlay = useRef()
    const [isPlaying, setIsPlaying] = useState(false)
    const durationInSeconds = timesInSeconds(duration)
    const [time, setTime] = useState(formatTime(0))
    const progressBar = useRef()

    const PlayPause = () => {
        setIsPlaying(!isPlaying)
        isPlaying ? audioPlay.current.pause() : audioPlay.current.play()


    }
    useEffect(()=>{
        PlayPause()
    },[])
    useEffect(() => {

        const intervalId = setInterval(() => {
            if (isPlaying) {
                setTime(formatTime(audioPlay.current.currentTime))
                progressBar.current.style.setProperty('--_progress', ((audioPlay.current.currentTime / durationInSeconds) * 100) + '%')
                timesInSeconds(duration)
            }
        }, 1000)

        return () => clearInterval(intervalId)
    }, [isPlaying])
    return (
        <div className="player">

            <div onLoad={()=>{console.log('a')}} className="player__controllers">
                <Link to={`/song/${randomId2FromArtist}`}>
                    <FaStepBackward className="player__icon" />
                </Link>

                {isPlaying === true ?
                    <FaPauseCircle onClick={PlayPause} className="player__icon" /> :
                    <FaPlayCircle onClick={PlayPause} className="player__icon" />
                }
                <Link to={`/song/${randomIdFromArtist}`}>
                    <FaStepForward className="player__icon" />
                </Link>
            </div>
            <div className="player__progress">
                <p>{time}</p>
                <div className="player__bar">

                    <div ref={progressBar} className="player__bar-progress"></div>
                </div>
                <p>{duration}</p>
            </div>
            <audio  ref={audioPlay} src={audio}></audio>
        </div>
    )
}
export default Player