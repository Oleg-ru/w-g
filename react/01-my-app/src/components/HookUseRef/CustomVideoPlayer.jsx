import React, {useRef, useState} from 'react';

function CustomVideoPlayer(props) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false)
    
    function handleVolumeChange(event) {
        videoRef.current.volume = event.target.value;
    }

    function handlePlayPause() {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause()
            setIsPlaying(false);
        }
    }

    return (
        <div>
            <video ref={videoRef} width="400">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
                Ваш браузер не поддерживает видео
            </video>
            <div>
                <button onClick={handlePlayPause}>{isPlaying ? 'Pause': 'Play'}</button>
                <input type="range" min="0" max="1" step="0.1" defaultValue="0.5" onChange={handleVolumeChange}/>
            </div>
        </div>
    );
}

export default CustomVideoPlayer;