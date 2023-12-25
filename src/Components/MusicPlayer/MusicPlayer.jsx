import React, { useState, useEffect } from 'react';

const MusicPlayer = ({ audioTrack }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7); 
  const [isLoaded, setIsLoaded] = useState(false);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = document.getElementById('audio');

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoaded(true);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    const audio = document.getElementById('audio');

    if (isLoaded) {
      if (isPlaying) {
        audio.play().catch((error) => {
          
          console.error('Error playing audio:', error);
        });
      } else {
        audio.pause();
      }
    }
  }, [isPlaying, isLoaded]);

  useEffect(() => {
    const audio = document.getElementById('audio');
    audio.volume = volume;
  }, [volume]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };
  

  const handleSeek = (event) => {
    const audio = document.getElementById('audio');
    const seekTime = (event.nativeEvent.offsetX / event.target.offsetWidth) * duration;
    audio.currentTime = seekTime;
  };

  const handleVolumeChange = (event) => {
    const audio = document.getElementById('audio');
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
    audio.volume = newVolume;
  };


  return (
    <div className='player' >
      <audio id="audio" src={audioTrack} />
 
   
    
     <div className="main">
      <div className="song-image">
        <img className='img' src="https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg" alt="" />
      </div>

      <div className="content">
      <p>{` ${formatTime(currentTime)}`}</p>
   
   <div className="play-stick">
   {isPlaying ? <i onClick={handlePlayPause} class="fa-solid fa-pause"></i>: <i  onClick={handlePlayPause} class="fa-solid fa-play"></i> }
   <div className='play-area'  onClick={handleSeek} > 
    
 
   
    <div className='play-bar'
      style={{
        width: `${(currentTime / duration) * 100}%`,
        
      }}
    />
  </div>
   </div>
    <p>{` ${formatTime(duration)}`}</p>   

      </div>
    
      <div className="volume">
      <input
      className='volume-input'
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
      />
      <i class="fa-solid fa-volume-low"></i>
      </div>




     </div>
     
 
   
      
    </div>
  );
};



export default MusicPlayer;
