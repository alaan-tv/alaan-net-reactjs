import React, { useRef, useState } from 'react';
import PlayButton from '../../Assets/play-button.svg';

const VideoWithThumbnail = ({ videoSrc, thumbnailSrc, altText, width = 572, height = 322 }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if (videoRef.current.mozRequestFullScreen) { /* Firefox */
        videoRef.current.mozRequestFullScreen();
      } else if (videoRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        videoRef.current.webkitRequestFullscreen();
      } else if (videoRef.current.msRequestFullscreen) { /* IE/Edge */
        videoRef.current.msRequestFullscreen();
      }
    }
  };

  return (
    <div className="video-container" style={{ width, height, position: 'relative' }}>
      {isPlaying ? (
        <>
          <video
            ref={videoRef}
            src={videoSrc}
            controls
            autoPlay
            style={{ width: '100%', height: '100%', borderRadius: '10px' }}
          />
          <button
            className="fullscreen-button"
            onClick={handleFullscreen}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            
          </button>
        </>
      ) : (
        <div className="thumbnail-wrapper" style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img
            src={thumbnailSrc}
            alt={altText}
            className="video-thumbnail"
            style={{ width: '100%', height: '100%', cursor: 'pointer', borderRadius: '10px' }}
            onClick={handlePlayVideo}
          />
          <button
            className="play-button"
            onClick={handlePlayVideo}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <img src={PlayButton} alt="Play" style={{ width: '50px', height: '50px' }} />
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoWithThumbnail;